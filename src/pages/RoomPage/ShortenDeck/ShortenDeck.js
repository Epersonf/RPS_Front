import React from 'react';
import './ShortenDeck.css';

export default function ShortenDeck(props) {
    return (
        <div className='shorten-deck'>
            <div className='ball'></div>
            <p>{props.name}</p>
            <p>{props.cards.length} cards</p>
        </div>
    )
}
