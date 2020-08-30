import React, { useState } from 'react';
import { postData } from '../../../Functions';
import { GlobalData } from '../../../VariableManager';

export default function RoomCreateBox(props) {
    const [playerName, setPlayerName] = useState('Player');
    const [name, setName] = useState('Room');
    const [password, setPassword] = useState('');
    const [maxAmountOfPlayers, setMaxAmountOfPlayers] = useState(4);

    const createRoom = () => postData('/', {
        'player_name': playerName,
        'name': name,
        'password': password,
        'max_amount_of_players': maxAmountOfPlayers
    }, (e) => {
        GlobalData['config']['headers']['Authorization'] = e.token;
        GlobalData['config_form']['headers']['Authorization'] = e.token;
        GlobalData['room'] = e.id;
        GlobalData['player_name'] = e.player_name;
        document.location.href = "/room/" + e.id;
    });

    return (
        <div className="pop-up">
            <button className="close-x-btn" onClick={() => props.setPopup(false)}>x</button>
            <h3>Create room</h3>
            <input placeholder='Player name' value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" />
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
