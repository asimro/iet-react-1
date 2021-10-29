import React from 'react'

export const TraxHistory = (prop) => {

const trxEvent = prop.nameEvent;

    return (
        <div>
            <h3>Transaction History </h3>

            { trxEvent ? trxEvent.map( (ev) => {
                return(    
                    <ul className="list">
                       <li>
                            <li>
                            {ev.returnValues.traxType}
                            </li>
                            <li>
                            {ev.returnValues._detail}
                            </li>
                            <li>
                            ${(ev.returnValues._amount).toLocaleString("en-US")}
                            </li>
                        </li>
                    </ul>
                    )
                })
                :""
            }
        </div>
    )
}
