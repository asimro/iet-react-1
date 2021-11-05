export const AppReducer = (state, action) => {
  switch (action.type) {

    case 'Set_Balance':
      return {
        ...state, balance: action.payload
      }

    case 'Set_Income':
      return {
        ...state, income: action.payload
      }

    case 'Set_Expense':
      return {
        ...state, expense: action.payload
      }

    case 'Set_Events':
      return {
        ...state, getAllEvents: action.payload
      }

    case 'Set_Trax':
      return {
        ...state, transaction: [action.payload, ...state.transaction]
      }

    default:
      return state;
  }
}