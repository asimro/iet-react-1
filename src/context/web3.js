import { setupWeb3, setAccounts, setBalance, setIncome, setExpense, setEvents, setTrax } from './Actions';
// import Web3 from 'web3';

const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/80c615a196014e1ca02ebafef471988d";
const web3 = new Web3(rpcURL);

let ABI = require("../IETabi.js");
const contractAddress = "0xfc5524A98a97Cbc5005367D0dAA2379862396917";
const contract = new web3.eth.Contract(ABI, contractAddress);


export const loadBlockChain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            //Enabling web3 injecter in browser
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            // console.log("Web3 provider", web3)
            dispatch(setupWeb3(web3));

            //getting account address from metamask 
            const accounts = await web3.eth.getAccounts();
            // console.log("Account", accounts);
            dispatch(setAccounts(accounts));
        }
    }
    catch (error) {
        console.log('Web3 Load Error', error)
    }
}




export const laodBalances = (dispatch) => {
    const getBalances = async () => {
        try {
            const balance = await contract.methods.getBalance().call();
            // console.log("Net Balance", balance);
            dispatch(setBalance(balance));


            const income = await contract.methods.getIncome().call();
            // console.log("Income", inc);
            dispatch(setIncome(income));


            const expense = await contract.methods.getExpense().call();
            // console.log("Expense", exp);
            dispatch(setExpense(expense));

            let getAllEvents = await contract.getPastEvents('AllEvents', {
                fromBlock: 72000,
                toBlock: "latest"
            });
            // console.log("No of Total Events", getAllEvents);
            dispatch(setEvents(getAllEvents));
        }
        catch (error) {
            console.log('get balances error', error)
        }
    }
    getBalances()
}



export const addTransaction = async (transactions, dispatch) => {
    try {
        if (Web3.givenProvider) {
            //Enabling web3 injecter in browser
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            // console.log("Web3 provider", web3)

            //getting account address from metamask 
            const accounts = await web3.eth.getAccounts();
            // console.log("Account", accounts);

            //getting contract address and ABI from given file
            const contract = new web3.eth.Contract(ABI, contractAddress);
            // console.log('Contract ', contract);
            // console.log('Contract methods', contract.methods);

            //transation calling / invoking
            const sendTransaction = await contract.methods.addEntry(transactions.Description, transactions.Amount).send({ from: accounts[0] });
            console.log('sendTransaction', sendTransaction);
            dispatch(setTrax(transactions));
        }
    }
    catch (error) {
        console.log('add transaction method error', error)
    }
}
