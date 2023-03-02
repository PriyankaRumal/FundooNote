import React from "react";
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

function Note3(props) {

    const NoteArchive = (id) => {
        ArchiveOrNotApi(id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log('Archive Successful')

    }
    const listenToColorPopper2 = (color1) =>{

        let nId = {
            "noteId": props.note.noteId, "color":color1

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
   
        return (
            <div className="note3container" style={{ backgroundColor: props.note.color }}>
                <div className="text">
                    <div className="entertxt1">
                        <span className='entertxt'>{props.note.title}</span>
                        <span className='entertxt'>{props.note.description}</span>
                    </div>
                    {/* <div className="entertxt"><InputBase placeholder="Take a Note..." /></div> */}
                    <div className="pin2">
                        <Button><PushPinOutlinedIcon style={{ color: 'black' }} fontSize="small" /></Button>
                    </div>
                </div>
                <div className="iconsNote3">
                    <div className="icn"><Button> <AddAlertOutlinedIcon className="iconofNote3" style={{ color: '#202124', marginLeft: '-10px' }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <PersonAddAltOutlinedIcon className="iconofNote3" style={{ color: "202124", marginLeft: '-10px' }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <Colorpopper className="iconofNote3" listenToColorPopper2 = {listenToColorPopper2} action="update"></Colorpopper> </Button></div>
                    <div className="icn"><Button> <AddPhotoAlternateOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    <div className="icn"><Button> <ArchiveOutlinedIcon
                        onClick={() => NoteArchive(props.note.noteId)}
                        className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    <div className="icn"> <Button> <MoreVertOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="small" /> </Button></div>
                    {/* <div className="icn"><Button> <UndoOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="20px" /> </Button></div>
                <div className="icn"><Button> <RedoOutlinedIcon className="iconofNote3" style={{ color: "202124" }} fontSize="20px" /> </Button></div> */}
                </div>
            </div>
        )
    }
    export default Note3