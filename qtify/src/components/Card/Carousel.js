import React,{useState, useEffect} from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import axios from "axios";

import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css'

export default function Carousel({ api , selectedval}){
  const [cardList, setCardList] = useState([]);
  

  // console.log("api is-------------", api)
    const fetchCardList= async ()=>{
        try{
        let data= await axios.get(api);
        // console.log(data);
        let finallist=data.data;
        if(selectedval){
// console.log("selected value???????????????????",selectedval )
const fiteredList = finallist.filter((ele)=> ele.genre.key.includes(selectedval));
setCardList(fiteredList);
        }
        else{
        setCardList(data.data)
        }
        }
        catch(error){
            console.log(error)
        }
      
        
        
    }
    useEffect(()=>{
            fetchCardList();
        }, [])

    return(
        <div className="d-flex justify-content-center">
         <Swiper
        
        navigation={{clickable: true,}}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
        modules={[ Navigation]}
        className="mySwiper text-white"
      >


{cardList? 
cardList.map((cardele)=>{
    return(<SwiperSlide className="d-flex justify-content-center">
       <Card cardele={cardele} />
       </SwiperSlide>)
})
 : ""}

        
      </Swiper>
  
        </div>
    )
}