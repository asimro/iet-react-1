import { setTrax } from './Actions';

export const AddTransaction = async (accounts, contract, transactions, dispatch) => {
    try {
        const sendTransaction = await contract.methods.addEntry(transactions.Description, transactions.Amount).send({ from: accounts[0] });
        console.log('sendTransaction', sendTransaction);
        dispatch(setTrax(transactions));
    }
    catch (error) {
        console.log('add transaction method error', error)
    }
}