import React from 'react';
import Card from './Card/Card';

export default function Deck(props) {
    
    return (
        <div className='deck-player'>
            {props.cards.map((e, index) => {
                return (
                    <Card key={index} type={e} />
                );
            })}
        </div>
    )
}
