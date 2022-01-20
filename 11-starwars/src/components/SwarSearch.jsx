import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

let SwarSearch = () => {
    let {cat,term,item}=useParams();
    let [listOfItems,setListOfItems]=useState([]);

    useEffect(()=>{   

        let srcText;
        term=='term'?srcText = `${cat}/?search=${item}`:
        srcText=`${cat}/${item}`    
        // console.log(`https://swapi.dev/api/${srcText}`);

        axios.get(`https://swapi.dev/api/${srcText}`)
        .then(response=>{
            console.log(response.data);
            term=='term'? setListOfItems(response.data.results):
            setListOfItems([response.data]);

        })
        .catch(err=>{
            alert("these arn't the droids your looking for")
        })


    },[cat,item])

    
    return (
        <>
        <div>
            <h1>{`Category: ${cat}`}</h1>
            {
            cat==="people"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Name: {itemObj.name}</h2>
                    <h2>height: {itemObj.height}</h2>
                    <h2>Skin Color: {itemObj.skin_color}</h2>
                    <h2>Hair Color: {itemObj.hair_color}</h2>
                    {/* <h2>Homeworld: {itemObj.homeworld}</h2> */}
                </div>
                )
            }):""
        }
        {  cat==="planets"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Name: {itemObj.name}</h2>
                    <h2>Rotaional Period: {itemObj.rotation_period}</h2>
                    <h2>Orbital Period: {itemObj.orbital_period}</h2>
                    <h2>Climate: {itemObj.climate}</h2>
                    <h2>Gravity: {itemObj.gravity}</h2>

                </div>
                )
            }):""            
            }
            {  cat==="films"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Title: {itemObj.title}</h2>
                    <h2>Episode: {itemObj.episode_id}</h2>                    
                    <h2>Director: {itemObj.director}</h2>
                    <h2>Release: {itemObj.release_date}</h2>
                    <h2>Opening:</h2> <p>{itemObj.opening_crawl}</p> 

                </div>
                )
            }):""            
            }
            {  cat==="species"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Name: {itemObj.name}</h2>
                    <h2>Classification: {itemObj.classification}</h2>                    
                    <h2>Average Height: {itemObj.average_height}</h2>
                    <h2>Skin Color: {itemObj.skin_colors}</h2>
                    <h2>Average Life Span:{itemObj.average_lifespan}</h2> 

                </div>
                )
            }):""            
            }
            {  cat==="starships"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Name: {itemObj.name}</h2>
                    <h2>Model: {itemObj.model}</h2>                    
                    <h2>Manufacturer: {itemObj.manufacturer}</h2>
                    <h2>Cost {`(credits)`} {itemObj.cost_in_credits}</h2>
                    <h2>Passengers:{itemObj.passengers}</h2> 
                       
                </div>
                )
            }):""            
            }
            {  cat==="vehicles"?
            listOfItems.map((itemObj,idx)=>{
                return(
                <div key={idx} style={{border: "2px solid #1C6EA4"}}>
                    <h2>Name: {itemObj.name}</h2>
                    <h2>Model: {itemObj.model}</h2>                    
                    <h2>Manufacturer: {itemObj.manufacturer}</h2>
                    <h2>Cost {`(credits)`} {itemObj.cost_in_credits}</h2>
                    <h2>Passengers:{itemObj.passengers}</h2> 
                       
                </div>
                )
            }):""            
            }
        </div>
        </>
    )
}
export default SwarSearch;