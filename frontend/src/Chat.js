import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core"

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                </div>
            </div>
        </div>
    )
}

export default Chat
