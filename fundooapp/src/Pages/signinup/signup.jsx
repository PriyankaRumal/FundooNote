import React, { useState } from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SignUpApi } from '../../services/userservice';
import { useNavigate } from 'react-router-dom';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signup(){

    let navigate1=useNavigate()
    const [enterDetail, setEnterDetail] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpass:''
    });
    const takename=(event)=>{
        console.log(event.target.value)
        setEnterDetail( preState => ({...preState,firstname:event.target.value}))
    }
    const takelastname=(event)=>{
        setEnterDetail(preState =>({...preState,lastname:event.target.value}))
    }
    const takeusername=(event)=>{
        setEnterDetail(preState =>({...preState,email:event.target.value}))
    }
    const takepassword=(event)=>{
        setEnterDetail(preState =>({...preState,password:event.target.value}))
    }
    const takeconfirm=(event)=>{
        setEnterDetail(preState =>({...preState,confirmpass:event.target.value}))
    }
    const [forRegix,setForRegix] = useState({
        fnamerror:false,
        fnamehelper:'',

        lnamerror:false,
        lnamehelper:'',

        usernamerror:false,
        usernamehelper:'',

        passworderror:false,
        passwordhelper:'',

        confirpasserror:false,
        confirmpasshelper:''

    });
    

    const showDetails =() =>{
        // console.log(enterDetail)
        // let fnametest=nameRegex.test(enterDetail.firstname)
        // let lnametest=nameRegex.test(enterDetail.lastname)
        // let usernametest=emailRegex.test(enterDetail.username)
        // let passwordtest=passwordRegex.test(enterDetail.password)
        // let confirmtest=passwordRegex.test(enterDetail.confirmpass)
        // console.log(fnametest)
        // console.log(lnametest)
        // console.log(usernametest)
        // console.log(passwordtest)
        // console.log(confirmtest)
        if(nameRegex.test(enterDetail.firstname)===false){
            setForRegix(preState =>({...preState,fnamerror:true,fnamehelper:'enter a correct name'}))
        }
        else if(nameRegex.test(enterDetail.firstname)===true){
            setForRegix(preState =>({...preState,fnamerror:false,fnamehelper:''}))
        }
        if(nameRegex.test(enterDetail.lastname)===false){
            setForRegix(preState =>({...preState,lnamerror:true,lnamehelper:'enter a correct name'}))
        }
        else if(nameRegex.test(enterDetail.lastname)===true){
            setForRegix(preState =>({...preState,lnamehelper:false,lnamehelper:''}))
        }
        if(emailRegex.test(enterDetail.email)===false){
            setForRegix(preState =>({...preState,usernamerror:true,usernamehelper:'enter a correct email'}))
        }
        else if(emailRegex.test(enterDetail.email)===true){
            setForRegix(preState =>({...preState,usernamerror:false,usernamehelper:''}))
        }
        if(passwordRegex.test(enterDetail.password)===false){
            setForRegix(preState =>({...preState,passworderror:true,passwordhelper:'enter a correct password'}))
        }
        else if(passwordRegex.test(enterDetail.password)===true){
            setForRegix(preState =>({...preState,passworderror:false,passwordhelper:''}))
        }
        if(passwordRegex.test(enterDetail.confirmpass)===false){
            setForRegix(preState =>({...preState,confirpasserror:true,confirmpasshelper:'enter a correct password'}))
        }
        else if(passwordRegex.test(enterDetail.confirmpass)===true){
            setForRegix(preState =>({...preState,confirpasserror:false,confirmpasshelper:''}))
        }
        
        if(forRegix.fnamerror === false && forRegix.lnamerror === false && forRegix.usernamerror === false && forRegix.passworderror === false && forRegix.confirpasserror === false){
            SignUpApi(enterDetail)
            .then(response => {
                console.log(response)
                navigate1('/')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    return(
        <>
        <div className="bodysignup">
        <div className="creatmainpage">
            <div className="formcreate">
                <div class="img3">
                    {/* <img width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBb1Pfdmuo5M9JIZYtqeM9vrhtIkQXA8xUJWXmk2kA9jIyo-hiJp4tmvzCSok7R5C82I4&usqp=CAU" alt=""/> */}
                    <div className="F">F</div>
                    <div className="U">u</div>
                    <div className="N">n</div>
                    <div className="D">d</div>
                    <div className="O">o</div>
                    <div className="O2">o</div>
                </div>
                <div className="headline">Create your Google Account</div>
                <div className="firstnlast">
                    <div className="firstname">
                        {/* <input type="text" className="fname" id="Fname" placeholder="First name"/> */}
                        <TextField 
                         onChange={takename}
                         error={forRegix.fnamerror}
                         helperText={forRegix.fnamehelper}
                        id="outlined-basic" className="fname"  label="First name" variant="outlined" fullWidth size='small'/>
                    </div>
                    <div className="lastname">
                        {/* <input type="text" className="lname" id="Lname" placeholder="Last name"/> */}
                        <TextField 
                        onChange={takelastname}
                        error={forRegix.lnamerror}
                        helperText={forRegix.lnamehelper}
                        id="outlined-basic" className="lname" sx={{marginLeft:1}}  label="Last name" variant="outlined" fullWidth size='small'/>
                    </div>
                </div>
                <div className="username">
                    {/* <input type="email" className="uname" id="userN" placeholder="Username"/> */}
                    <TextField 
                    onChange={takeusername}
                    error={forRegix.usernamerror}
                    helperText={forRegix.usernamehelper}
                    id="outlined-basic" className="uname" label="Username" variant="outlined" fullWidth="true"  size='small'/>

                    <p className="instruction">You can use letters,numbers and fullstops</p>
                </div>
                <div className="currentemail">
                    <span>Use my current email address instead</span>
                </div>
                <div className="PasswordField">
                    <div className="pass1">
                        {/* <input type="password" className="passw1" id="Passw1" placeholder="Password"/> */}
                        <TextField 
                        onChange={takepassword}
                        error={forRegix.passworderror}
                        helperText={forRegix.passwordhelper}
                        id="outlined-basic" className="passw1"  label="Password" variant="outlined"  fullWidth size='small'/>

                    </div>
                    <div className="confirm">
                        {/* <input type="password" className="passw1" id="confirmpass" placeholder="confirm"/> */}
                        <TextField 
                        onChange={takeconfirm}
                        error={forRegix.confirpasserror}
                        helperText={forRegix.confirmpasshelper}
                        id="outlined-basic" className="uname" sx={{marginLeft:1}} label="Confirm" variant="outlined" fullWidth size='small'/>

                    </div>
                    {/* <div className="use8"><p>Use 8 or more characters with a mix of letters, numbers & symbols</p></div> */}
                </div>
                <div className="use8"><p>Use 8 or more characters with a mix of letters, numbers & symbols</p></div>
                <div className="showpass">
                    <input type="checkbox" name="checkbox" 
                    className="box" id="check"/><label for="check">show password</label>
                </div>
                <div className="signinInstead">
                    <Button className="instead" onClick={()=>navigate1('/')} >Sign in instead</Button>
                 <Button className="next"
                  onClick={showDetails} variant="contained">Next</Button>
                </div>
            </div>
            <div className="imagelogo">
                <div className="logo1">
                    <img width="100%" height="100%" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                    <div className="OneAccount">One Account.All of Google working for you</div>
                </div>
            </div>
        </div>
    {/* </div> */}
    </div>
        </>
    )
}
export default Signup;