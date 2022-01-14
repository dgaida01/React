
import React ,{useState} from 'react';

let PersonCard = (props) =>{
    return(

        <div>
            <h1>{props.lname},{props.fname}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color:{props.hair}</p>
        </div>
    );
}
export default PersonCard