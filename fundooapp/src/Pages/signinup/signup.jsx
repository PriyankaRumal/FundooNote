import React from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
function Signup(){
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
                        <TextField id="outlined-basic" className="fname"  label="First name" variant="outlined" fullWidth size='small'/>
                    </div>
                    <div className="lastname">
                        {/* <input type="text" className="lname" id="Lname" placeholder="Last name"/> */}
                        <TextField id="outlined-basic" className="lname" sx={{marginLeft:1}}  label="Last name" variant="outlined" fullWidth size='small'/>
                    </div>
                </div>
                <div className="username">
                    {/* <input type="email" className="uname" id="userN" placeholder="Username"/> */}
                    <TextField id="outlined-basic" className="uname" label="Username" variant="outlined" fullWidth="true"  size='small'/>

                    <p className="instruction">You can use letters,numbers and fullstops</p>
                </div>
                <div className="currentemail">
                    <span>Use my current email address instead</span>
                </div>
                <div className="PasswordField">
                    <div className="pass1">
                        {/* <input type="password" className="passw1" id="Passw1" placeholder="Password"/> */}
                        <TextField id="outlined-basic" className="passw1"  label="Password" variant="outlined"  fullWidth size='small'/>

                    </div>
                    <div className="confirm">
                        {/* <input type="password" className="passw1" id="confirmpass" placeholder="confirm"/> */}
                        <TextField id="outlined-basic" className="uname" sx={{marginLeft:1}} label="Confirm" variant="outlined" fullWidth size='small'/>

                    </div>
                    {/* <div className="use8"><p>Use 8 or more characters with a mix of letters, numbers & symbols</p></div> */}
                </div>
                <div className="use8"><p>Use 8 or more characters with a mix of letters, numbers & symbols</p></div>
                <div className="showpass">
                    <input type="checkbox" name="checkbox" className="box" id="check"/><label for="check">show password</label>
                </div>
                <div className="signinInstead">
                    <button className="instead" onClick={()=>window.location.href='signin.jsx/SignIn;'}>Sign in instead</button>
                 <button className="next" onclick="window.location.href ='signin.jsx';">Next</button>
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