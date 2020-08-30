import React from 'react';
import './Card.css';
import VERSE from '../../../../assets/VERSE.png';
import ROCK from '../../../../assets/ROCK.png';
import PAPER from '../../../../assets/PAPER.png';
import SCISSOR from '../../../../assets/SCISSOR.png';

export default function Card(props) {
    let card = VERSE;
    switch(props.type) {
        case 0:
            card = ROCK;
            break;
        case 1:
            card = PAPER;
            break;
        case 2:
            card = SCISSOR;
            break;
        default:
            break;
    }
    return (
        <div className='card-player'>
            <img src={card} alt={'Card ' + props.type} />
        </div>
    )
}
