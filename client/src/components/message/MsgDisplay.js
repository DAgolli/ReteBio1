import React from 'react'
import Avatar from '../Avatar'

const MsgDisplay = ({user}) => {
    return (
        <>
            <div className="chat_title">
                <Avatar src={user.avatar} size="small-avatar" />
                <span>{user.username}</span>
            </div>
            <div className="chat_text">
                Lorem ipsum ............... ............. ..............
            </div>

            <div className="chat_time">
                April 2021
            </div>
        </>
    )
}

export default MsgDisplay
