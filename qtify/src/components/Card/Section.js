import Card from "./Card";
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Carousel from './Carousel';


function Section({sectionTitle, api}) {
    const [cardList, setCardList] = useState([]);
    const [isCollapsed, setisCollapsed] = useState(false);


    const handleCollapse=(e)=>{
        setisCollapsed((prev) =>!prev);
       

    }
    const fetchCardList= async ()=>{
        try{
        let data= await axios.get(api);
        // console.log(data);
        setCardList(data.data)
        }
        catch(error){
            console.log(error)
        }
      
        
        
    }
    useEffect(()=>{
            fetchCardList();
        }, [])

   return(
    <div style={{padding:'0 32px'}}>
        <div className="d-flex justify-space-between">
        <h4 className="text-white text-left fs-20"> {sectionTitle}</h4>
        <button className="text-primary text-left bg-none border-0 fs-20 fw-600" onClick={(e)=>{handleCollapse(e)}}> {isCollapsed?"collapse":"showall"} </button>
        </div>
{isCollapsed?

        <Box justifyContent="center" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>

      {cardList? 
cardList.map((cardele)=>{
    return(<Grid key={cardele.id} item xs={6} md={8}>
       <Card cardele={cardele} />
       </Grid>)
})
 : ""

}
        
        
      </Grid>
    </Box>
:
 < Carousel  api={api}/>
}

    </div>
)
}
export default Section;