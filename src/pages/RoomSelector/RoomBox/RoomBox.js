import React, { useState } from 'react';
import './RoomBox.css';
import { postData } from '../../../Functions';
import { GlobalData } from '../../../VariableManager';
import RoomJoinBox from '../RoomJoinBox/RoomJoinBox';

export default function RoomBox(props) {
    return (
        <div onClick={() => props.setJoin(props.roomInfo.id)} className='room-box'>
            <p>{props.roomInfo.name}</p>
            <p>{props.roomInfo.amount_of_players}/{props.roomInfo.max_amount_of_players}</p>
        </div>
    )
}
