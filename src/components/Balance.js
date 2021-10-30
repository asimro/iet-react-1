import React from 'react'
import '../App.css';

export const Balance = (prop) => {
    return (
        <div>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance" id="balance"> ${prop.nameBal} </h1>

        </div>
    )
}
