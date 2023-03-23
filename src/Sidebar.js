import { Button, IconButton } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
    return (
        <div className='sidebar'>
        <Button
        startIcon={<AddIcon fontSize="large" />}
        className='sidebar__compose'
        >
            Compose
        </Button>
    
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarBorderOutlinedIcon} title="Starred" number={54}/>
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
        <SidebarOption Icon={LabelOutlinedIcon} title="Important" number={54}/>
        <SidebarOption Icon={NearMeOutlinedIcon} title="Sent" number={54}/>
        <SidebarOption Icon={NoteOutlinedIcon} title="Drafts" number={54}/>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>

        <div className='sidebar__footer'>
            <div className='sidebar__footerIcons'>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>


            </div>
        </div>
        </div>
    )
}

export default Sidebar