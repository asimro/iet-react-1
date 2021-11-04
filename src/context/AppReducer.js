
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'Get_Balance':
            return {...state, bal: state.bal = 100};

        default:
            return state;

    }
}

