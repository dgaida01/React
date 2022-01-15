import React, { useState } from 'react';

let HookForm = (props) => {

    let [FirstName, setFirstName] = useState();
    let [LastName, setLastName] = useState();
    let [Email, setEmail] = useState();
    let [Password, setPassword] = useState("");
    let [ConPass, setConPass] = useState("");
  

   
    return (
        <div className='gap-3'>
            <p className="fw-bold fs-4">Form Inputs</p>
            <form className="row g-4">
                <div className="">
                    <label htmlFor="FirstName" className="me-4">First Name </label>
                    <input type="text" id="" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        FirstName!= undefined && FirstName.length < 2 ?
                            <p className="text-danger"> Name must be at least 2 char long!</p> :
                            ""
                    }
                </div>
                <div className="">
                    <label htmlFor="LastName" className="me-4">Last Name </label>
                    <input type="text" id="" onChange={(e) => setLastName(e.target.value)} />
                    {
                        LastName != undefined && LastName.length<2 ?
                        <p className="text-danger">Last Name must be at least 2 char long!</p>:
                        ""
                    }
                </div>
                <div className="">
                    <label htmlFor="Email" className="me-5">Email:</label>
                    <input type="text" id="" onChange={(e) => setEmail(e.target.value)} />
                    {
                        Email !=null && Email.length<5?
                        <p className='text-danger'>Email must be at least 5 char long!</p>:
                        ""
                    }

                </div>
                <div className="">
                    <label htmlFor="Password" className="me-4">Password </label>
                    <input type="password" id='pass1' onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="">
                    <label htmlFor="ConfirmPassword" className="me-3">Confirm Pass </label>
                    <input type="password" id='pass2' onChange={(e) => setConPass(e.target.value)}  />
                    {
                        Password!="" && Password.length<8?
                        <p className='text-danger'>Password must be at least 8 char long!</p>:
                        ""
                    }
                    {
                        // && Password!=undefined && ConPass!=Password
                        ConPass!="" &&  Password!=ConPass?
                        <p className='text-danger'>Password must match confirm Password</p>:
                        ""
                    }
              

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
            <div>passlen: {Password.length}</div>
        </div>
    );

}

export default HookForm;