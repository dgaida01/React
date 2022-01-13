import React, {Component} from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props);

        this.state={
            age:this.props.age

        };

    }

    render(){
        let addOneYear = ()=>{
            this.setState({age:this.state.age +1});
            }

        let {firstName,lastName,hairColor}=this.props;
        let {age} = this.state;
            
        return <div>
            <h1>{lastName}, {firstName} </h1>
            <p>age: {age} </p>
            <p>hair color: {hairColor}</p>

            <button className='btn btn-primary'onClick={addOneYear}>Happy Birthday {firstName}</button>
            
        </div>
        // just playin
        // more here
    }

}

export default PersonCard;