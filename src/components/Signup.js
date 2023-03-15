import React, { Component, useState } from 'react'
import UserService from '../service/UserService';

const Signup=()=> {

const[fullname,setuName]=useState();
const[userName,setUserName]=useState();
const[Email,setEmail]=useState();
const[Password,setPassword]=useState();
let CreateUser={
    fullname:fullname,
    userName:userName,
    Email:Email,
    Password:Password

}
const createSignup=()=>{
    UserService.register().then((res)=>{
        console.log(res)
    })
    window.location.reload("/list")
}
    return(
            <div className = 'container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Signup</h1>
                </div>
                <div className='card-body'>
                    <form>
                        <div className="mb-3">
                            <label for="full name" className="form-label">FullName</label>
                            <input type="text" className="form-control" id="full name" placeholder=' Enter Full Name' onChange={(e) => setuName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="full name" className="form-label"> UserName</label>
                            <input type="text" className="form-control" id="user name" placeholder=' Enter User Name' onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="full name" className="form-label">Email</label>
                            <input type="text" className="form-control" id="Email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="full name" className="form-label">password</label>
                            <input type="text" className="form-control" id="Password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn btn-primary' onClick={createSignup}>Create</button><br/><br />
                        <a href='#'>Have an account? login</a>
                    </form>
                </div>
            </div>
            </div>
        )
    }


export default Signup
