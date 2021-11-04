import React, { useContext, useState } from 'react'
import '../App.css';
import { UserContext } from '../context/contextAPI';
import { addTransaction } from '../context/web3';

export const AddTrax = () => {

    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();
    const [dispatch] = useContext(UserContext)


    const onSubmit = async () => {
        try {
            const transactions= {
                Description: description,
                Amount: amount
            }
            await addTransaction(transactions, dispatch);
        }
        catch (error) {
            console.log("error onSubmit trax = ", error);
        }
    }


    return (
        <div>
            <h3>Adding New Transactions</h3>
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
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
