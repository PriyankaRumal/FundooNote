import React, { useState } from "react";
import '../Note3/Note3.css';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Button } from "@mui/material";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { ArchiveOrNotApi, ColorApi } from "../../services/dataservice";
import Colorpopper from "../ColorPopper/Colorpopper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import Typography from '@mui/material/Typography';
import { UpdateNoteApi } from "../../services/dataservice";
import { TrashNoteApi } from "../../services/dataservice";
import { PinnedNoteApi } from "../../services/dataservice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height:'22vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Note3(props) {

    const [open, setOpen] = React.useState(false);
    
    const handleOpen = (modalObj) => {
        setOpen(true);
        console.log(modalObj)
        setModState({
            noteId:modalObj.noteId,
            title:modalObj.title,
            description:modalObj.description
        })
    }
    const handleClose = () => setOpen(false);

    const [modstate,setModState]=useState({
        title:'',
        description:''
    })

    const takeTitle=(event)=>{
        setModState(prevstate=>({...prevstate,title: event.target.value}))
    }
    const takedescreption=(event)=>{
        setModState(prevstate=>({...prevstate,description: event.target.value}))
    }

    const NoteArchive = (id) => {
        ArchiveOrNotApi(id)
            .then(response => {
                console.log(response)
                props.autoRefresh()
            })
            .catch((error) => console.log(error))
        console.log('Archive Successful')

    }
    const PinnedNote=(id)=>{
        PinnedNoteApi(id)
        .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log('pinned successful')
    }

    const TrashNote=(id)=>{
        TrashNoteApi(id)
        .then(response =>{
         console.log(response)
         props.autoRefresh()
        })
            .catch((error) => console.log(error))
        console.log('moved to trash!')
    }
    const listenToColorPopper2 = (color1) => {

        let nId = {
            "noteId": props.note.noteId, "color": color1

        }

        ColorApi(nId)
            .then(res => {
                console.log(res)
                props.autoRefresh()
            })
            .catch(err => {
                console.log(err)
            })

    }
     const  updateNote=(noteId)=>{
        setOpen(false)
        UpdateNoteApi(noteId,modstate)
        .then(res => {
            console.log(res)
            props.autoRefresh()
        })
        .catch(err => {
            console.log(err)
        })
        console.log('Update Successful')
     }

    return (
        <div>
            <div className="note3container" style={{ backgroundColor: props.note.color }}>
                <div className="text">
                    <div className="entertxt1">
                        <span className='entertxt'  onClick={() => handleOpen(props.note)} >{props.note.title} </span>
                        <span className='entertxt'  onClick={() => handleOpen(props.note)} >{props.note.description}</span>
                    </div>
                    {/* <div className="entertxt"><InputBase placeholder="Take a Note..." /></div> */}
                    <div className="pin2">
                        <Button><PushPinOutlinedIcon 
                        onClick={()=>PinnedNote(props.note.noteId)}
                        style={{ color: 'black' }} fontSize="small" /></Button>
                    </div>
                </div>
                <div className="iconsNote3">
                    <div className="icn"><Button> <AddAlertOutlinedIcon className="iconofNote3" style={{ color: '#202124', marginLeft: '-10px' }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <PersonAddAltOutlinedIcon className="iconofNote3" style={{ color: "202124", marginLeft: '-10px' }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <Colorpopper className="iconofNote3" listenToColorPopper2={listenToColorPopper2} action="update"></Colorpopper> </Button></div>
                    <div className="icn"><Button> <DeleteOutlinedIcon 
                    onClick={()=>TrashNote(props.note.noteId)}
                    className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <ArchiveOutlinedIcon
                        onClick={() => NoteArchive(props.note.noteId)}
                        className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    <div className="icn"> <Button> <MoreVertOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    {/* <div className="icn"><Button> <UndoOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="20px" /> </Button></div>
                <div className="icn"><Button> <RedoOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="20px" /> </Button></div> */}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            {/* <Box sx={style}> */}
            <Box  sx={style} className="mainContainer" >
            <div className='input1'>
                <div className="title1"><InputBase 
                defaultValue={modstate.title}
                onChange={takeTitle}
                style={{ color: '#202124' }}/></div>
                <div className="pin"><Button>< PushPinOutlinedIcon  style={{ color: 'black' }} fontSize="small"/></Button></div>
            </div>
            <div className='input2'><InputBase 
            defaultValue={modstate.description}
            onChange={takedescreption}
             /></div>
            <div className="icons">
            <div className="icons1">
            <Button> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small"/> </Button>
            <Button> <PersonAddAltOutlinedIcon style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <ColorLensOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </Button>
            <Button> <AddPhotoAlternateOutlinedIcon  style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <ArchiveOutlinedIcon style={{ color: "202124" }} fontSize="small"/> </Button>
            <Button> <MoreVertOutlinedIcon style={{ color: "202124" }} fontSize="small" /> </Button>
            <Button> <UndoOutlinedIcon  style={{ color: "202124" }} fontSize="small"/> </Button>
            <Button> <RedoOutlinedIcon  style={{ color: "202124" }} fontSize="small"/> </Button>
            </div>
            <div className="close"><Button style={{ color: '#202124' }}
            onClick={() => updateNote(modstate.noteId)}
            >Close</Button></div>

            </div>
      </Box>
        {/* </Box> */}
            </Modal>
        </div>
    )
}
export default Note3