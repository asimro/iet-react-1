import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';

export const Balance = () => {

    const [{ balance }] = useContext(UserContext);
    const Balance = balance.toLocaleString("en-US");
    return (
        <div>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance" id="balance"> ${Balance} </h1>

        </div>
    )
}
