import React from "react";
import Card from "./Card";
import { useState,useEffect } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Section from './Section';
import Carousel from './Carousel';
 

const Cards =  () =>{
    const [isCollapsed, setisCollapsed] = useState("collapse");



return(
    <>
    
  

    <Section sectionTitle="Top Albums" api="https://qtify-backend-labs.crio.do/albums/top" hascollapse/>

    <Section sectionTitle="New Albums" api="https://qtify-backend-labs.crio.do/albums/new" hascollapse />
    <Section sectionTitle="Songs" api="https://qtify-backend-labs.crio.do/songs" hasFilter/>
    </>
)

} 
export default Cards