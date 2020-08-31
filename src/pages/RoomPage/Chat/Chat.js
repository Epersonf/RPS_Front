import React, { useState } from 'react';
import { postData } from '../../../Functions';
import './Chat.css';

export default function Chat(props) {

    const [text, setText] = useState('');

    const clickSend = () => postData('room/' + props.roomId + '/chat/' + props.index,
        {
            'msg': text
        }
    , (e) => {
        setText('');
    });

    let buildString = 'Welcome to the game chat.';
    if (props.chatLog) {
        props.chatLog.forEach(e => {
            buildString += '\n' + e;
        });
    }
    return (
        <div className='chat-div'>
            <textarea value={buildString} readOnly={true}/>
            <input value={text} onChange={(e) => setText(e.target.value)} type='text'/>
            <button onClick={clickSend}>Send</button>
        </div>
    )
}
