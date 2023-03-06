import { Button } from "@mui/material";
import React, { useState } from "react";
import '../Note1/Note1.css';
import InputBase from '@mui/material/InputBase';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
// import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { CreateNoteApi } from "../../services/dataservice";
import Colorpopper from "../ColorPopper/Colorpopper";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function Note1(props){
  
    const [createnote,setCreateNote]=useState({
        title:'',
        description:'',
        archiveNote:false,
        color:'',
        trash:false,
        pinNote:false
    })
    const takeTitle=(event)=>{
        console.log(event.target.value)
        setCreateNote(prevstate=>({...prevstate,title:event.target.value}))
    }
    const takeDescreption=(event)=>{
        setCreateNote(prevstate=>({...prevstate,description:event.target.value}))
    }
    const noteArchive=(event)=>{
        setCreateNote(prevstate=>({...prevstate,archiveNote:true}))
        console.log('Archive Successful')

    }
    const moveToTrash=(event)=>{
        setCreateNote(prevstate=>({...prevstate,trash:true}))
        console.log('moved to trash')
    }
    const notePin=(event)=>{
        setCreateNote(prevstate=>({...prevstate,pinNote:true}))
        console.log('note pinned')
    }
    const openColorPopper =(colour) => {
        setCreateNote(prevState => ({...prevState,color:colour}))
    }

    const closenote=()=>{
        props.closetaknote1()
        if(createnote.title || createnote.description)
        {
        console.log(createnote)
        CreateNoteApi(createnote)
        .then(response => {
            console.log(response)
            props.autoRefresh()
        })
        .catch(error => {
            console.log(error)
        })
       }
    }
    return(
        <div className="mainContainer" style={{backgroundColor:createnote.color}}>
            <div className='input1'>
                <div className="title1"><InputBase placeholder="Title" 
                onChange={takeTitle}
                style={{ color: '#202124' }}/></div>
                <div className="pin"><Button>< PushPinOutlinedIcon 
                onClick={notePin} style={{ color: 'black' }} fontSize="small"/></Button></div>
            </div>
            <div className='input2'><InputBase 
            onChange={takeDescreption}
            placeholder="Take a Note..." /></div>
            <div className="icons">
            <div className="icons1">
            <Button> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small"/> </Button>
            <Button> <PersonAddAltOutlinedIcon style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <Colorpopper openColorPopper={openColorPopper} action="create"/> </Button>
            <Button> <DeleteOutlinedIcon 
             onClick={moveToTrash}
            style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <ArchiveOutlinedIcon 
             onClick={noteArchive} style={{ color: "202124" }} fontSize="small"/> </Button>
            <Button> <MoreVertOutlinedIcon style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <UndoOutlinedIcon  style={{ color: "202124" }} fontSize="small"/> </Button>
            <Button> <RedoOutlinedIcon  style={{ color: "202124" }} fontSize="small"/> </Button>
            </div>
            <div className="close"><Button style={{ color: '#202124' }}
            onClick={closenote}>Close</Button></div>

            </div>
      </div>
    )
}
export default Note1