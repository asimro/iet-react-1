import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer';


const initialState = {
    bal: 222
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const value = {
        bal: state.bal
    }

    return (
        <GlobalContext.Provider value={value}>

            {/* <h4>My Balance is {state}</h4> */}
            {/* <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>Decrement 5</button> */}
            <button onClick={() => dispatch({ type: "Get_Balance" })}>Increment 100</button>

            {children}
        </GlobalContext.Provider>
    )
}
