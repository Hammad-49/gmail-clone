import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar ,IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <IconButton>
        <MenuIcon />
        </IconButton>
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07q93zrT7Djv5w2RVzVCvJK91YY7IhbDwRg&usqp=CAU"
            alt=""
            />

    </div>
    <div className='header__middle'>
        <SearchOutlinedIcon />
        <input placeholder='Search email' type='text' />
        <ArrowDropDownOutlinedIcon className="header__inputCaret"/>
    </div>
    <div className='header__right'>
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar />

    </div>
    </div>
)
}

export default Header