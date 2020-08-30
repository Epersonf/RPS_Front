import React, { useState } from 'react';

export default function RoomJoinBox(props) {
    const [playerName, setPlayerName] = useState('Player');
    const [password, setPassword] = useState('');
    
    return (
        <div className="pop-up">
            <button onClick={() => props.setJoin(-1)} className='close-x-btn'>x</button>
            <h3>Join room</h3>
            <input placeholder='Player name' value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" />
            <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button onClick={() => props.joinRoom(props.join, playerName, password)}>Join</button>
        </div>
    )
}
