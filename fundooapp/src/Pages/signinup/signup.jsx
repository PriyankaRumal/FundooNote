import React, { useState } from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signup(){

    const [enterDetail, setenterDetail] = useState({
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        confirmpass:''
    })
    const takename=(event)=>{
        console.log(event.target.value)
        setenterDetail( preState => ({...preState,firstname:event.target.value}))
    }
    const takelastname=(event)=>{
        setenterDetail(preState =>({...preState,lastname:event.target.value}))
    }
    const takeusername=(event)=>{
        setenterDetail(preState =>({...preState,username:event.target.value}))
    }
    const takepassword=(event)=>{
        setenterDetail(preState =>({...preState,password:event.target.value}))
    }
    const takeconfirm=(event)=>{
        setenterDetail(preState =>({...preState,confirmpass:event.target.value}))
    }
    const [forRegix,setforRegix] = useState({
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

    })
    

    const showDetails =() =>{
        console.log(enterDetail)
        let fnametest=nameRegex.test(enterDetail.firstname)
        let lnametest=nameRegex.test(enterDetail.lastname)
        let usernametest=emailRegex.test(enterDetail.username)
        let passwordtest=passwordRegex.test(enterDetail.password)
        let confirmtest=passwordRegex.test(enterDetail.confirmpass)
        console.log(fnametest)
        console.log(lnametest)
        console.log(usernametest)
        console.log(passwordtest)
        console.log(confirmtest)
        if(fnametest===false){
            setforRegix(preState =>({...preState,fnamerror:true,fnamehelper:'enter a correct name'}))
        }
        else if(fnametest===true){
            setforRegix(preState =>({...preState,fnamerror:false,fnamehelper:''}))
        }
        if(lnametest===false){
            setforRegix(preState =>({...preState,lnamerror:true,lnamehelper:'enter a correct name'}))
        }
        else if(lnametest===true){
            setforRegix(preState =>({...preState,lnamehelper:false,lnamehelper:''}))
        }
        if(usernametest===false){
            setforRegix(preState =>({...preState,usernamerror:true,usernamehelper:'enter a correct email'}))
        }
        else if(usernametest===true){
            setforRegix(preState =>({...preState,usernamerror:false,usernamehelper:''}))
        }
        if(passwordtest===false){
            setforRegix(preState =>({...preState,passworderror:true,passwordhelper:'enter a correct password'}))
        }
        else if(passwordtest===true){
            setforRegix(preState =>({...preState,passworderror:false,passwordhelper:''}))
        }
        if(confirmtest===false){
            setforRegix(preState =>({...preState,confirpasserror:true,confirmpasshelper:'enter a correct password'}))
        }
        else if(confirmtest===true){
            setforRegix(preState =>({...preState,confirpasserror:false,confirmpasshelper:''}))
        }
        
    }
    return(
        <>

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
                    <button className="instead" >Sign in instead</button>
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
        </>
    )
}
export default Signup;