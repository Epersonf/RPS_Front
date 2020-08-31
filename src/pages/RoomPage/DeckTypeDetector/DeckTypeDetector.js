import React from 'react'
import ShortenDeck from '../ShortenDeck/ShortenDeck';
import Deck from '../Deck/Deck';

export default function DeckTypeDetector(props) {

    return (
        <React.Fragment>
            {(props.roomId !== undefined) ?
            <Deck name={props.name} roomId={props.roomId} index={props.index} cards={props.cards}/> :
            <ShortenDeck name={props.name} index={props.index} cards={props.cards}/>}
        </React.Fragment>
    );
}
