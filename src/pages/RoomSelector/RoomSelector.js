import React, { useState, useEffect } from 'react';
import { fetchData, postData } from '../../Functions';
import RoomBox from './RoomBox/RoomBox';
import './RoomSelector.css';
import RoomCreateBox from './RoomCreateBox/RoomCreateBox';
import RoomJoinBox from './RoomJoinBox/RoomJoinBox';
import { GlobalData, BakeGlobalData } from '../../VariableManager';

export default function RoomSelector() {

    const [rooms, setRooms] = useState([]);

    const getRooms = () => fetchData('/', (e) => setRooms(e));

    useEffect(getRooms, []);

    const [join, setJoin] = useState(-1);
    const [popup, setPopup] = useState(false);

    function joinRoom(id, name, password) {
        postData('/room/' + join, {
            'player_name': name,
            'password': password
        }, (e) => {
            if (e === undefined || e === '') {
                alert("Falha ao entrar");
                return;
            }
            GlobalData['config']['headers']['Authorization'] = e.token;
            GlobalData['config_form']['headers']['Authorization'] = e.token;
            GlobalData['room'] = e.id;
            GlobalData['player_name'] = e.player_name;
            BakeGlobalData();
            document.location.href = '/room/' + e.id;
        })
    }

    return (
        <section>
            {join >= 0 ? <RoomJoinBox join={join} setJoin={setJoin} joinRoom={joinRoom}/> : ''}
            {popup ? <RoomCreateBox setPopup={setPopup} /> : ''}
            <button onClick={() => setPopup(true)}>Create room</button>
            <section className="room-box-section">
            {rooms.map((e) => {
                return (<RoomBox join={join} setJoin={setJoin} key={e.id} roomInfo={e}/>);
            })}
            </section>
        </section>
    )
}
