import React, { useState, useEffect } from 'react';
import './RoomPage.css';
import { GlobalData } from '../../VariableManager';
import Deck from './Deck/Deck';
import { fetchData } from '../../Functions';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function RoomPage() {
    let query = document.location.href.split('/');
    let roomId = parseInt(query[query.length - 1]);

    //#region Scheduled update
    const [updt, setUpdt] = useState(true);

    const loop = () => {
        const execute = async () => {
            await sleep(500);
            update();
            setUpdt(!updt);
        }
        execute();
    }

    useEffect(loop, [updt]);
    //#endregion

    const [cards, setCards] = useState(new Array(4).fill([]));
    const update = () => {
        fetchData('room/' + roomId, (e) => {
            setCards(e);
            console.log(e);
        });
    }

    return (
        <section>
            <Deck cards={cards[1]}/>
            <div>
                <Deck cards={cards[2]}/>
                <Deck cards={cards[3]}/>
            </div>
            <Deck cards={cards[0]}/>
        </section>
    )
}
