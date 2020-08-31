import React from 'react';
import './Leadeboard.css';

export default function Leaderboard(props) {
    return (
        <div className='leaderboard'>
            {props.leaderboard.sort((a, b) => b.score - a.score).map((e, index) => {
                return (
                    <p key={index}>{e.name + ' -> ' + e.score}</p>
                );
            })}
        </div>
    )
}
