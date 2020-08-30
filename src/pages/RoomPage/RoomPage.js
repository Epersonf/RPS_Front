import React, { useState, useEffect } from 'react';
import './RoomPage.css';
import { GlobalData } from '../../VariableManager';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function RoomPage() {

    const [updt, setUpdt] = useState(true);

    const loop = () => {
        const execute = async () => {
            await sleep(500);
            console.log('a');
            setUpdt(!updt);
        }
        execute();
    }

    useEffect(loop, [updt]);

    return (
        <section>
            aa
        </section>
    )
}
