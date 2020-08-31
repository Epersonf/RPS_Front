import React from 'react'
import VERSE from '../../../assets/VERSE.png';
import ROCK from '../../../assets/ROCK.png';
import PAPER from '../../../assets/PAPER.png';
import SCISSOR from '../../../assets/SCISSOR.png';
import './MiddleCards.css';

const id = [VERSE, ROCK, PAPER, SCISSOR]

export default function MiddleCards(props) {
    return (
        <div className='middle-cards'>
            {(props.middleCards[0] != null) ? <img src={id[props.middleCards[0] + 1]} alt={'Card'}/> : ''}
            {(props.middleCards[1] != null) ? <img src={id[props.middleCards[1] + 1]} alt={'Card'}/> : ''}
        </div>
    )
}
