import { setupWeb3, setAccounts, setContractAddress, setBalance, setIncome, setExpense, setEvents } from './Actions';
import Web3 from 'web3';

let ABI = require("../IETabi.js");
const ContractAddress = "0x6b858Be9185633585488CE644549A817E1fBaBAc";


export const loadBlockChain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {

            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            console.log("Web3 provider", web3)
            dispatch(setupWeb3(web3));

            const accounts = await web3.eth.getAccounts();
            console.log("Account", accounts);
            dispatch(setAccounts(accounts));

            const contract = new web3.eth.Contract(ABI, ContractAddress);
            console.log('contract', contract);
            dispatch(setContractAddress(contract));

            const balance = await contract.methods.getBalance().call();
            console.log("Net Balance", balance);
            dispatch(setBalance(balance));

            const income = await contract.methods.getIncome().call();
            console.log("Income", income);
            dispatch(setIncome(income));

            const expense = await contract.methods.getExpense().call();
            console.log("Expense", expense);
            dispatch(setExpense(expense));
        }
    }
    catch (error) {
        console.log('Web3 Load_Block_Chian Error', error)
    }
}



export const loadHistory = async (contract, dispatch) => {
    try {
        let getAllEvents = await contract.getPastEvents('AllEvents', {
            fromBlock: 72000,
            toBlock: "latest"
        });
        console.log("No of Total Events", getAllEvents);
        dispatch(setEvents(getAllEvents));

    }
    catch (error) {
        console.log('Web3 Load_History Error', error)
    }
}