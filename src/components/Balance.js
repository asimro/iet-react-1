import '../App.css';
import React, {useContext} from 'react'
import { UserContext } from '../context/contextAPI';

export const Balance = () => {

    const [{ balance }] = useContext(UserContext);
    console.log('my balance is', balance)

    return (
        <div>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance" id="balance"> ${balance} </h1>

        </div>
    )
}
