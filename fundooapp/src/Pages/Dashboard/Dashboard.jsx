import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Note1 from "../../Component/Note1/Note1";
import Note2 from "../../Component/Note2/Note2";
import { GetAllNoteApi } from "../../services/dataservice";
import { useEffect } from "react";


function Dashboard(){
    
    const [toggle,setToggle] = useState(false)
    const listentotake1=()=>{
        setToggle(true)
    }
    const closetaknote1=()=>{
        setToggle(false)
    }
    useEffect(()=>{
        GetAllNoteApi()
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
 return(
    <div>
        <Header />
            {
                toggle? <Note1 closetaknote1={closetaknote1}/> : <Note2 listentotake1={listentotake1}/>
            }
        
    </div>
 )
}
export default Dashboard