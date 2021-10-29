import React from 'react'

export const Balance = (prop) => {
    return (
        <div>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance" id="balance"> ${prop.name} </h1>

        </div>
    )
}
