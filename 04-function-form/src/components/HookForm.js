import React, { useState } from 'react';

let HookForm = (props) => {

    let [FirstName,setFirstName] = useState(null);
    let [LastName,setLastName] = useState(null);
    let [Email,setEmail] = useState(null);
    let [Password,setPassword] = useState(null);
    let [ConPass,setConPass] = useState(null); 
    

    return (
        <div className='gap-3'>
           <p className="fw-bold fs-4">Form Inputs</p> 
          <form className="row g-4">
            <div className="">
              <label htmlFor="FirstName" className="me-4">First Name </label> 
              <input type="text" id="" onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="">
              <label htmlFor="LastName" className="me-4">Last Name </label> 
              <input type="text" id="" onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="">
              <label htmlFor="Email" className="me-5">Email:</label> 
              <input type="text" id="" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="">
              <label htmlFor="Password" className="me-4">Password </label> 
              <input type="password" id='' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="">
              <label htmlFor="ConfirmPassword" className="me-4">Password </label> 
              <input type="password" id='' onChange={(e)=>setConPass(e.target.value)}/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
            <h4 className='mt-3'>Your Form Data:</h4>
            <div>First Name: {FirstName}</div>
            <div>Last Name: {LastName}</div>
            <div>Email: {Email}</div>
            <div>Password: {Password}</div>
            <div>Confirm Password: {ConPass}</div>
        </div>
    );

}

export default HookForm;