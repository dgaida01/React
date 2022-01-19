import React, {useState} from "react";
import {useParams} from 'react-router';



let Fmtpg=()=>{
    let {id ='home',txtColor='black',bgColor='white'}= useParams();
    console.log(id,txtColor,bgColor);
    return(
        <div className=" border border-dark border-3"style={{color:txtColor, backgroundColor:bgColor}}>
        {
            id.toLowerCase()=='home'?
            <h1>Welcome Home</h1>:
            isNaN(id)?
            <h1>The word is {id}</h1>:
            <h1>The number is {id}</h1>
        }
        </div>
        
    );
}
export default Fmtpg;