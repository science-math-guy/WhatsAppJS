import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core"
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/77799977?s=460&u=5cdc3e831da576e368a8f00b54d8a89c6b33b6ff&v=4"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" name="search" id="search" placeholder="Search..."/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
