import React from 'react';
import './RoomBox.css';

export default function RoomBox(props) {

    function clickBox() {
        
    }

    return (
        <div onClick={clickBox} className='room-box'>
            <p>{props.roomInfo.name}</p>
            <p>{props.roomInfo.amount_of_players}/{props.roomInfo.max_amount_of_players}</p>
        </div>
    )
}
