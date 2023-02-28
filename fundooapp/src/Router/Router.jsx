import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import SignIn from '../Pages/signinup/signin'
import Signup from '../Pages/signinup/signup'
import Dashboard from '../Pages/Dashboard/Dashboard'
function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<SignIn/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Router1