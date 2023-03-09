import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Note1 from "../../Component/Note1/Note1";
import Note2 from "../../Component/Note2/Note2";
import Note3 from "../../Component/Note3/Note3";
import { GetAllNoteApi } from "../../services/dataservice";
import { useEffect } from "react";
import '../Dashboard/Dashboard.css'
import Drawwer from "../../Component/Drawer/Drawwer";


function Dashboard() {

    const [toggle, setToggle] = useState(false)
    const [dataArray, setDataArray] = useState([])
    const [drawerstate,setDrawerState]=useState(false)
    const [noteNavBarValue, setNeNavBarValue] = useState("Notes")

    const listentoHeader=()=>{
        setDrawerState(!drawerstate)
        console.log(drawerstate)
    }

    const listentotake1 = () => {
        setToggle(true)
    }
    const closetaknote1 = () => {
        setToggle(false)
    }
    const getAllNote=()=>{
        GetAllNoteApi()
        .then(response => {
            console.log(response)
           // setDataArray(response.data.data)
           let noteArray = [];
           if (noteNavBarValue === "Notes") {
               noteArray = response.data.data.filter((note) =>{
                if(note.archiveNote===false && note.trash===false)
                {
                    return note
                }
            })
           }
           else if(noteNavBarValue === "Archive"){
            noteArray = response.data.data.filter((note) =>{
                if(note.archiveNote===true && note.trash===false)
                {
                    return note
                }
            })
           }
           else if(noteNavBarValue === "Trash"){
            noteArray = response.data.data.filter((note) =>{
                if(note.archiveNote===false && note.trash===true)
                {
                    return note
                }
            })
           }
           setDataArray(noteArray)
        })
        .catch(error => {
            console.log(error)
            console.log("Notes List Retrived")
        })  
    }
    const autoRefresh = () => {
        getAllNote()
    }
    useEffect(() => {
        getAllNote()
    }, [noteNavBarValue])

    const SelectText1=(label)=>{
        console.log(label)
        setNeNavBarValue(label)
    }
    return (
        <div>
            <Header listentoHeader={listentoHeader} />
            <Drawwer drawerstate={drawerstate} SelectText1={SelectText1}/>
            <div className="toggleBetween">
                {
                    toggle ? <Note1 closetaknote1={closetaknote1} autoRefresh={autoRefresh}/> : <Note2 listentotake1={listentotake1} />
                }
            </div>

            <div className="previousnote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {/*  list rendering to retrive our all notes array*/}
                {
                    dataArray.map((note) => (<Note3 note={note} autoRefresh={autoRefresh} />))
                }
            </div>

        </div>
    )
}
export default Dashboard