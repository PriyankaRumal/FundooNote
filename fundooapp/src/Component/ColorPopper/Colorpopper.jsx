import React from 'react';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

function Colorpopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

      const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
    //   const colors=["red","green","yellow"]

      const pickcolor=(colur)=>{
        // console.log(colur)
        // props.openColorPopper(colur)
        if (props.action === "create") {
            console.log("color coming from note2")
            props.openColorPopper(colur)
        } else if (props.action === "update") {
            console.log("color coming from note3")
            props.listenToColorPopper2(colur)
        }
      }
    return (
        <div>
            <ColorLensOutlinedIcon aria-describedby={id} type="button" style={{ color: "202124" }} fontSize="small" onClick={handleClick}>colorButton </ColorLensOutlinedIcon>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border:1, p: 1, bgcolor: 'background.paper', width:300 ,display:'flex', justifyContent:'space-between' }}>
                    {
                        colors.map(color =>(
                            <div style={{width:22,height:22,border:'1px solid transparent', borderRadius:100, backgroundColor:color}} onClick={()=>pickcolor(color)} ></div>
                          ))
                    }
                </Box>
            </Popper>
        </div>
    )
}
export default Colorpopper