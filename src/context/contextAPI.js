import React, { createContext, useReducer } from 'react'
import { AppReducer } from './Reducer';
import { loadBlockChain } from './web3call';

const initialState = {
    web3: null,
    accounts: [],
    contract: null,
    balance: 0,
    income: 0,
    expnese: 1,
    getAllEvents: [],
    Error: null,
    transaction: []
}

export const UserContext = createContext(initialState);


export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (
        <UserContext.Provider value={[state, dispatch]}>
            <div>
                <button className="btnweb3" onClick={() => loadBlockChain(dispatch)}>Connect Your Wallet
                    <br />
                    {state.accounts[0]}
                </button>
            </div>

            {children}
        </UserContext.Provider>
    )
}
