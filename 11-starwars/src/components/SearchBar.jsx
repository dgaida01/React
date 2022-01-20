import { useState } from 'react';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

let SearchBar=()=>{
let history=useHistory();
let [searchType, setSearchType] = useState("Name / Model"); //passive variable suggestion for how to use search function
let [update, setupdate] = useState(true); //determines if useEffect should be triggered
let [category, setCategory] = useState("");  //selects the category to search in the Starwars API
let [apidx, setApidx] = useState('');         //will be used to search by index number the API if no search term is supplied
let [searchTerm,setSearchTerm] = useState('') //overrides index search to look for a Like type search for the words provide in the cateogry selected

useEffect(() => {
  
  setCategory(document.getElementById("starWarsCat").value);
  setApidx(document.getElementById("indexOfApi").value);
  setSearchTerm(document.getElementById('searchTerm').value)

}, [update])

let updateCat = (e) => {
  setupdate(!update);
}

let setPath=(e)=>{
  e.preventDefault();
  let pathLocation = '/'+category;
  if (searchTerm!=""){
    pathLocation+='/term/'+searchTerm;
    // window.location.replace(`${pathLocation}`)
    console.log("path location-->", pathLocation)
    console.log('history-->', history)
    history.push(`${pathLocation}`)
  }
  else if(apidx!=""){
    pathLocation+='/'+apidx;
    // window.location.replace(`${pathLocation}`)
    history.push(`${pathLocation}`)
    
    
  }
  else{
    alert('Please enter a search term or api index ID')
  }
 
  
}

return (

    <div className=" mt-3 container-fluid align-content-start">
      <div className="container col" style={{marginLeft:'50px',minWidth:'1400px'}}>
        <form className='row justify-content-sart aling-items-end'>
          <div className="col-1 me-3 d-flex align-items-end ">
          <select name="starWarsCat" id="starWarsCat" className='btn btn-primary' style={{height:'35px'}} onChange={updateCat} defaultValue={"people"}>
            <option value="people" >People</option>
            <option value="films" >Films</option>
            <option value="planets" >Planets</option>
            <option value="species" >Species</option>
            <option value="starships" >Starships</option>
            <option value="vehicles" >Vehicles</option>
          </select>
          </div>
          <div className="col-3 d-flex align-items-end">
          <input type="text"  id="searchTerm" style={{width:'300px'}} placeholder={`Refine search by ${searchType}`} onChange={updateCat} />
          </div>
          <div className="col-1 d-flex align-items-end me-4" >
            <label className='me-2 text-center'>indexID:</label>
            <input className="" style={{width:'50px'}} type="number" name="" id="indexOfApi" onChange={updateCat}/>
          </div>
          <div className="col-1">            
            <button className="btn btn-primary" onClick={setPath}>search</button>
          </div>
        </form>
        <hr className='col-6' style={{height:'12px'}} />
        </div>
   
    </div>
  );
}

export default SearchBar;