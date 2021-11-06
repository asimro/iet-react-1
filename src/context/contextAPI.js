import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './Reducer';
import { laodBalances, loadBlockChain } from './web3';

const initialState = {
    web3: null,
    accounts: [],
    balance: 10,
    income: 11,
    expnese: 12,
    getAllEvents: [],
    transaction: []
}


export const UserContext = createContext(initialState);


export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        loadBlockChain(dispatch);
        laodBalances(dispatch)
    }, []);

    return (
        <UserContext.Provider value={[state, dispatch]}>

            {children}
        </UserContext.Provider>
    )
}
