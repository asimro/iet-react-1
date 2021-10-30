import React from 'react'
import '../App.css';

export const AddTrax = (prop) => {
    return (
        <div>
            <h3>Adding New Transactions</h3>
            <form >
                {/* onSubmit={onSubmit}> */}
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        value="description"
                        // onChange={(e) => setdescription (e.target.value) }
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
                        value="amount"
                        // onChange={(e) => setamount(e.target.value) }
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
