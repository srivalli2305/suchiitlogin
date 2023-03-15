import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'

class NavBar extends Component {
    render() {
        return (
            <div className='container'>

                <BrowserRouter>

                    <div className='menu' >
                        <ul>
                            <li style={{marginRight:900}}>
                                <img src='https://media.licdn.com/dms/image/C4D0BAQHoifz8QC0E3A/company-logo_200_200/0/1668101244792?e=2147483647&v=beta&t=T-oAxvLXzADQ115WZsMPHztbMK3bw5q5Zp6MKVYZBII
' width="100" height="100" alt='logo' />
                            </li>
                            <li style={{marginRight:20}}>
                                <Link to='/Signin'>signin</Link>
                            </li>
                            <li >
                                <Link to='/signup'>signup</Link>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <hr />
                    <Routes>
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}

export default NavBar
