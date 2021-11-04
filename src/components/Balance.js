import '../App.css';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { bal } = useContext(GlobalContext);
    

    return (
        <div>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance" id="balance"> ${bal} </h1>

        </div>
    )
}
