import React from "react";
import '../Note2/Note2.css';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function Note2(){
    return(
        <div className="Container2">
            <div className="takenote"><InputBase placeholder="Take a Note.." style={{ color: '#202124' }}/></div>
            <div className="iconsofnote">
                <Button><CheckBoxOutlinedIcon style={{ color: '#202124' }} /></Button>
                <Button><BrushOutlinedIcon style={{ color: '#202124' }}/></Button>
                <Button><ImageOutlinedIcon style={{ color: '#202124' }}/></Button>
            </div>
        </div>
    )
}
export default Note2