import axios from 'axios'
import React,{useState} from 'react'

let Pokemon = () =>{

    let [listOfPokemon,setListOfPokemon]=useState([])

    let getPokemon =()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=800")
        .then(response=>{
            setListOfPokemon(response.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <>
        <h1>Pokemon Component</h1>
        <button onClick={getPokemon} >Fetch Pokemon</button>
        {
            listOfPokemon.map((pokeObj,idx)=>{
                return( 
                    <ul key={idx} className='d-flex  justify-content-center'>
                    <li className='w-25 p-2 text-start'>{pokeObj.name}</li>
                    </ul>
                )}  
            )
        }
   
    
        </>
    )
}

export default Pokemon;