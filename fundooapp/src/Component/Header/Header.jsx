import { Button } from "@mui/material";
import React, { useState } from "react";
import '../Header/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux'
function Header(props) {
  const Searchval=(e)=>{
     props.listentoSearch(e.target.value)
  }
   const listentomenu=()=>{
    props.listentoHeader()
   }
  return (
    <div className="container">
      <div className="menu">
        <Button 
        onClick={listentomenu}><MenuIcon 
        style={{ color: '#202124' }} /></Button>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/640px-Google_Keep_icon_%282020%29.svg.png"/>
        <div className="head1">{props.label}</div>
      </div>
      <div className="Searchbar">
      <div className='icon'><Button> <SearchIcon style={{ color: '#5f6368' }} /> </Button></div>
            <div className='input'><InputBase onChange={Searchval} placeholder="Search" /></div>
      </div>
      <div className="icons2">
            <Button> <RefreshIcon style={{ color: '#202124' }} fontSize="small"/> </Button>
            <Button> <ViewAgendaOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </Button>
            <Button> <SettingsOutlinedIcon style={{ color: '#202124' }} fontSize="small"/> </Button>
            <Button> <AppsOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </Button>
            <Button> <AccountCircleIcon style={{ color: '#202124' }} fontSize="small"/> </Button>
        </div>
    </div>
  )
}
const mapStateToProps =(state)=>{
  console.log(state)

  return{
   label:state.DrawerReducer.value
  }
}
export default connect(mapStateToProps)(Header)