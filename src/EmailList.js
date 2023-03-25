import React from 'react'
import "./EmailList.css"
import { IconButton } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



function EmailList() {
  return (
    <div className='emailList'>
    <div className='emailList__settings'>
    <div className='emailList__settingLeft'>
        
        <IconButton>
            <CheckBox/>
        </IconButton>
        
        <IconButton>
            <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
            <RedoIcon />
        </IconButton>
        <IconButton>
            <MoreVertIcon />
        </IconButton>
    </div>
        <div className='emailList__settingRight'>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            </div>

    </div>

        <div className='emailList__sections'>
            <Section  Icon={InboxIcon} title="Primary" color="red" Selected />
            <Section  Icon={PeopleIcon} title="Social" color="#1A73E8" Selected />
            <Section  Icon={LocalOfferIcon} title="Promotion" color="green" Selected />

        </div>
    </div>
    )
}

export default EmailList