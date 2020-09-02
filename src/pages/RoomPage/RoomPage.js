import React, { useState, useEffect } from 'react';
import './RoomPage.css';
import { fetchData } from '../../Functions';
import DeckTypeDetector from './DeckTypeDetector/DeckTypeDetector';
import Chat from './Chat/Chat';
import MiddleCards from './MiddleCards/MiddleCards';
import Leaderboard from './Leaderboard/Leaderboard';
import { GlobalData } from '../../VariableManager';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function RoomPage() {
    const playerId = GlobalData['player_id'];
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

    const [info, setInfo] = useState(new Array(4).fill({'name': 'Nullable Entity', 'cards': []}));
    const [chatLog, setChatLog] = useState([]);
    const [middleCards, setMiddleCards] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const update = () => {
        fetchData('room/' + roomId, (e) => {
            if (!e.cards) document.location.href = '/';
            e.cards = e.cards.sort((a, b) => a.index - b.index);
            e.cards[0] = [e.cards[playerId], e.cards[playerId] = e.cards[0]][0];
            setInfo(e.cards);
            setChatLog(e.chat);
            setMiddleCards(e.middle_cards);
            setLeaderboard(e.leaderboard);
        });
    }

    if (!info) {
        document.location.href = '/';
        return ('');
    }

    return (
        <section className='card-page-sctn'>
            <button onClick={() => document.location.href='/'} className='back-button'>{'<'}</button>
            <Leaderboard leaderboard={leaderboard} />
            <div className='only-three-people'>
                <DeckTypeDetector index={info[1].index} name={info[1].name} cards={info[1].cards}/>
                {(info.length === 3) ? <DeckTypeDetector index={info[2].index} name={info[2].name} cards={info[2].cards}/> : ''}
            </div>
            <div className='inline-deck'>
                {(info.length > 3) ? <DeckTypeDetector index={info[2].index} name={info[2].name} cards={info[2].cards}/> : ''}
                <MiddleCards info={info} middleCards={middleCards} />
                {(info.length >= 4) ? <DeckTypeDetector index={info[3].index} name={info[3].name} cards={info[3].cards}/> : ''}
            </div>
            <DeckTypeDetector roomId={roomId} index={info[0].index} name={info[0].name} cards={info[0].cards}/>
            <Chat chatLog={chatLog} roomId={roomId} index={info[0].index}/>
        </section>
    )
}
