import React, { useState } from 'react';
import './RoomCreateBox.css';
import { postData } from '../../../Functions';

export default function RoomCreateBox(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [maxAmountOfPlayers, setMaxAmountOfPlayers] = useState(4);
    
    const createRoom = () => postData('/', {
        'name': name,
        'password': password,
        'max_amount_of_players': maxAmountOfPlayers
    }, (e) => {
        document.location.href = "/room/" + e.id;
    })

    return (
        <div className="pop-up">
            <h3>Create room</h3>
            <input placeholder='Room name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <select value={maxAmountOfPlayers} onChange={(e) => setMaxAmountOfPlayers(e)}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <button onClick={createRoom}>Create</button>
        </div>
    )
}
