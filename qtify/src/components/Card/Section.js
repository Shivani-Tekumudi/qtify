import Card from "./Card";
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Carousel from './Carousel';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



function Section({sectionTitle, api, hascollapse,hasFilter}) {
    const [cardList, setCardList] = useState([]);
    const [isCollapsed, setisCollapsed] = useState(false);
    const [genres, setGenres] =useState([]);
    const [value, setValue] = React.useState('all');
    



    const handleCollapse=(e)=>{
        setisCollapsed((prev) =>!prev);
       

    }

const fetchGenres =async(api) =>{
  try{
    let response= await axios.get(api);
    setGenres(response.data.data);
    
  }
  catch(error){
    console.log(error)
  }
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



   

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    useEffect(()=>{
            fetchCardList();
            fetchGenres('https://qtify-backend-labs.crio.do/genres')
        }, [])


         useEffect(()=> {
          

         },[value])
   return(
    <div style={{padding:'0 32px'}}>
        <div className="d-flex justify-space-between">
        <h4 className="text-white text-left fs-20"> {sectionTitle}</h4>
{hascollapse?

<button className="text-primary text-left bg-none border-0 fs-20 fw-600 pointer" onClick={(e)=>{handleCollapse(e)}}>
     {isCollapsed?"Collapse":"Show All"} </button> :
""
}

        
        </div>
        {hasFilter? 
        
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}
     
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* {console.log("generes-------------" ,genres)} */}


          <TabList onChange={handleChange} aria-label="lab API tabs example"  sx={{
        "& .MuiTab-root": { color: "white" }, // Default tab color
        "& .Mui-selected": { color: "#34C94B !important" , fontWeight: "bold" }, // Selected tab color
        "& .MuiTabs-indicator": { backgroundColor: "#34C94B" }, // Underline color
      }}>
        <Tab label ="all" value= "all"/>
        {genres&& genres.map((ele,idx)=>{
          return(
            <Tab key={idx} label={ele.label} value={ele.key} />
          )
        }) }
       

            
          </TabList>
        </Box>
        <TabPanel value="all" className="text-white"><Carousel api={api}/></TabPanel>
        {genres&& genres.map((ele,idx)=>{
          return(
        <TabPanel value={ele.key} className="text-white"> < Carousel  api={api} selectedval ={ele.key}/></TabPanel>
          )
        })
      }
       
      </TabContext>
    </Box>: 
    
    " "}
{hascollapse? isCollapsed?      <Box justifyContent="center" sx={{ flexGrow: 1 }}>
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
 : ""

}




    </div>
)
}
export default Section;