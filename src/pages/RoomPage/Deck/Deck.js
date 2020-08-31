import React from 'react';
import Card from './Card/Card';
import './Deck.css';

export default function Deck(props) {
    
    return (
        <div className='deck-player'>
            {props.cards.map((e, index) => {
                return (
                    <Card key={index} roomId={props.roomId} ownerIndex={props.index} type={e} index={index} />
                );
            })}
        </div>
    )
}
