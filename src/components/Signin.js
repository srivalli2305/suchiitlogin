import React, { Component, useState } from 'react'
import UserService from '../service/UserService';

const Signin =()=> {
   
        const [username , setuserName] = useState(); 
        const [password , setuPassword] = useState(); 
        const Login=()=>{
            UserService.loginUser(username, password).then((res)=>{
                console.log(res);
            })
            window.open("/list")
        }
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>Signin</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-label">User name</label>
                                <input type="text" className="form-control" id="username" onChange={(e)=>setuserName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="password" className="form-label">password</label>
                                <input type="text" className="form-control" id="password" onChange={(e)=>setuPassword(e.target.value)} />
                            </div>
                            <button className='btn btn-primary' onClick={Login}>login</button><br /><br/>
                            <a href='#'>Forgot password?</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


export default Signin
