import React, {Component} from 'react';

class PersonCard extends Component{

    render(){
        let {firstName,lastName,age,hairColor}=this.props;
            
        return <div>
            <h1>{lastName}, {firstName} </h1>
            <p>age: {age} </p>
            <p>hair color: {hairColor}</p>
        </div>
    }

}

export default PersonCard;