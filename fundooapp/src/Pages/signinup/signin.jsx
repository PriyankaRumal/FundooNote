import React, { useState } from 'react';
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SignInApi } from '../../services/userservice';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function SignIn() {

    const [userDetails, setuserDetails] = useState({
        email: ""
        , password: ""
    })
    const takeEmail = (event) => {
        console.log(event.target.value)
        setuserDetails(preState =>({...preState,email:event.target.value}))
    }
    const takePass = (event) => {
        // console.log(event)
        setuserDetails(preState =>({...preState,password:event.target.value}))
    }
    const [userRegix,setuserRegix]=useState({
        emailMsg:false,
        emailHelper:"",
        passMsg:false,
        passHelper:""
    })
    const nextbtn = () => {
        console.log(userDetails)
        let emailTest=emailRegex.test(userDetails.email)
        let passTest=passwordRegex.test(userDetails.password)
        console.log(emailTest)
        console.log(passTest)
        if(emailTest===false){
            setuserRegix(preState =>({...preState,emailMsg:true,emailHelper:'enter correct email'}))
        }
        else if(emailTest===true){
            setuserRegix(preState =>({...preState,emailMsg:false,emailHelper:''}))
        }
        if(passTest===false){
            setuserRegix(preState =>({...preState,passMsg:true,passHelper:'enter correct Password'}))
        }
        else if(passTest===true){
            setuserRegix(preState =>({...preState,passMsg:false,passHelper:''}))
        }
        if(emailTest===true && passTest ===true)
        {
            SignInApi(userDetails)
        }
    }
    return (
        <>
            <form className="FormBody">
                <div className="logo">
                    {/* <img width={90} height={30} src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-File.png" alt="" /> */}
                    <div className="F">F</div>
                    <div className="U">u</div>
                    <div className="N">n</div>
                    <div className="D">d</div>
                    <div className="O">o</div>
                    <div className="O2">o</div>
                </div>
                <div className="signin">Sign in</div>
                <div className="user">
                    Use your Google Account
                </div>
                <div className="InputBox">
                    <div >
                        {/* <input className="InputEmail" placeholder="Email or phone" /> */}
                        <TextField
                            onChange={takeEmail}
                            error={userRegix.emailMsg}
                            helperText={userRegix.emailHelper}
                            id="outlined-basic" className="InputEmail" label="Email or Phone" variant="outlined" />
                    </div>
                    <div >
                        {/* <input className="InputPassword" placeholder="Password" /> */}
                        <TextField
                            onChange={takePass}
                            error={userRegix.passMsg}
                            helperText={userRegix.passHelper}
                            id="outlined-basic2" className="InputPassword" label="Password" variant="outlined" />
                    </div>
                </div>
                <div className="forgot">
                    <div className="forgotemail">Forgot email?</div>
                    <div className="forgotpassword">Forgot password?</div>
                </div>
                <div className="bottomtext">
                    <p>Not your computer? Use Guest mode to sign in privately.</p>
                </div>
                <div className="bottomtext2">Learn more.</div>
                <div className="CreateAccountLogin">
                    <a className="CreateAccountLink" href='<signup/>'>Create Account</a>
                    <Button onClick={nextbtn} className="LoginButton" variant="contained">Next</Button>
                </div>
            </form>
            <div className="footer">
                <select className="language">
                    <option value="English">English (India)</option>
                    <option value="English">English (United States)</option>
                    <option value="English">беларуская</option>
                    <option value="English">ქართული</option>
                </select>

                <div className="footercontent">
                    Help  &nbsp;  &nbsp;  &nbsp; Privacy &nbsp; &nbsp; &nbsp; Terms
                </div>
            </div>
        </>
    )
}
export default SignIn;