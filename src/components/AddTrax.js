import React, { useState, useContext } from 'react'
import { UserContext } from '../context/contextAPI';
import { AddTransaction } from '../context/web3trax';
import { loadHistory, loadBlockChain } from '../context/web3call';
import '../App.css';


export const AddTrax = () => {
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();
    const [{ accounts, contract }, dispatch] = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const transactions = {
                Description: description,
                Amount: amount
            }
            console.log(transactions);

            await AddTransaction(accounts, contract, transactions, dispatch);
            await loadHistory(contract, dispatch);
            await loadBlockChain(dispatch);
        }
        catch (error) {
            console.log("error onSubmit trax = ", error);
        }
    }

    return (
        <div>
            <h3>Adding New Transactions <br />
                (Income &nbsp;= &nbsp;+ &emsp; and  &emsp;Expenses &nbsp;= &nbsp;-&nbsp;) </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Transaction Details"
                        required="required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Value of Transaction"
                        required="required"
                    />
                </div>
                <button className="btn" >
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
