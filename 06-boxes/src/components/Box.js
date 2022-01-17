import React, { useState } from "react";


let Box = () =>{
    
    let [aColor,setAColor] = useState("");
    let [dimention, setDimention] = useState("40")
    let [boxState,setBoxState]=useState([]);



let addColor =(e)=>{
    e.preventDefault();
    let abox ={
        boxColor :aColor,
        boxDimension : dimention
    }

    setBoxState([...boxState,abox]);
    
    document.getElementById("colorInput").value="";
    document.getElementById("wd").value=dimention;
    
    
}


return (
<div>
    <form>
<label htmlFor="">color:</label>
<input type="text" name="" id="colorInput"  onChange={(e)=>setAColor(e.target.value)}/> <br />
<label htmlFor="boxsize">Box Size:</label>
<input type="text" id='wd' defaultValue={40} onChange={(e)=>setDimention(e.target.value)} />
<button type="submit" onClick={(e)=>addColor(e)}>add</button>
</form>
    <hr />
   
    {
        boxState.map((abox,i)=>{
            
            return(
                <div key={i} className="d-inline-flex" >
                <div  style={{backgroundColor:abox.boxColor ,width:abox.boxDimension+'px',height: abox.boxDimension+'px'}}></div>
                </div>
            )
            }
        )
    }
</div>

);


}
export default Box;