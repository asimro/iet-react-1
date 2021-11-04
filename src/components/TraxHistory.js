import React, {useContext} from 'react'
import { UserContext } from '../context/contextAPI';
import '../App.css';

export const TraxHistory = () => {

    const [{getAllEvents}] = useContext(UserContext)

    return (
        <div>
            <h3>Transaction History </h3>

            {getAllEvents ? getAllEvents.map((ev) => {
                return (
                    <ul className="list">
                        <li>
                            <li>
                                {ev.returnValues.traxType}
                            </li>
                            <li>
                                {ev.returnValues._detail}
                            </li>
                            <li>
                                ${ev.returnValues._amount}
                            </li>
                        </li>
                    </ul>
                )
            })
                : ""
            }
            {/* <button onClick={() => { getBalances() }} className="btn">
                    Get Transaction History
                </button> */}
        </div>
    )
}