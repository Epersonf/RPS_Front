import React from 'react';
import './BrodcastShow.css';

export default function BroadcastShow(props) {
    return (
        <div className='broadcast-show'>
            {props.broadcast}
        </div>
    )
}
