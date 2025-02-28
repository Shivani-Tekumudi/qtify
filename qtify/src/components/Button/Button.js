import React from "react";
import './Button.css'


export default function Button ({text, onCLick}){
    return (
    <button className="button-primary"  onClick={onCLick}>
        {text}
         </button>
    )
} 