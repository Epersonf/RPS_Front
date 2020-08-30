import React from 'react'
import ShortenDeck from '../ShortenDeck/ShortenDeck';
import Deck from '../Deck/Deck';

export default function DeckTypeDetector(props) {

    return (
        <React.Fragment>
            {(props.cards[0] !== -1) ?
            <Deck name={props.name} index={props.index} cards={props.cards}/> :
            <ShortenDeck name={props.name} index={props.index} cards={props.cards}/>}
        </React.Fragment>
    );
}
