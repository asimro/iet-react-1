// Actions

export const setupWeb3 = (web3) => {
    return {
        type: 'Setup_Web3',
        payload: web3
    };
}

export const setAccounts = (accounts) => {
    return {
        type: 'Set_Accounts',
        payload: accounts
    };
}

export const setBalance = (balance) => {
    return {
        type: 'Set_Balance',
        payload: balance
    };
}

export const setIncome = (income) => {
    return {
        type: 'Set_Income',
        payload: income
    };
}

export const setExpense = (expense) => {
    return {
        type: 'Set_Expense',
        payload: expense
    };
}

export const setEvents = (getAllEvents) => {
    return {
        type: 'Set_Events',
        payload: getAllEvents
    };
}

export const setTrax = (transactions) => {
    return {
        type: 'Set_Trax',
        payload: transactions
    };
}
