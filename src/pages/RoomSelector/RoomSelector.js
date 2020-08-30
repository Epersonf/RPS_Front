import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Functions';
import RoomBox from './RoomBox/RoomBox';
import './RoomSelector.css';
import RoomCreateBox from './RoomCreateBox/RoomCreateBox';

export default function RoomSelector() {

    const [rooms, setRooms] = useState([]);

    const getRooms = () => fetchData('/', (e) => setRooms(e));

    useEffect(getRooms, []);

    const [popup, setPopup] = useState(false);
    return (
        <section>
            {popup ? <RoomCreateBox /> : ''}
            <button onClick={() => setPopup(true)}>Create room</button>
            <section className="room-box-section">
            {rooms.map((e) => {
                return (<RoomBox key={e.id} roomInfo={e}/>);
            })}
            </section>
        </section>
    )
}
