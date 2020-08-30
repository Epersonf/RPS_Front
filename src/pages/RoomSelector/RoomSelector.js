import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Functions';
import RoomBox from './RoomBox/RoomBox';
import './RoomSelector.css';

export default function RoomSelector() {

    const [rooms, setRooms] = useState([]);

    const getRooms = () => fetchData('/', (e) => setRooms(e));

    useEffect(getRooms, []);

    return (
        <section className="room-box-section">
            {rooms.map((e) => {
                return (<RoomBox key={e.id} roomInfo={e}/>);
            })}
        </section>
    )
}
