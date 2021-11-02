import React, { useState } from 'react';
import '../App.css';

//import components
import { Header } from './Header';
import { Balance } from './Balance';
import { TraxSummary } from './TraxSummary';
import { TraxHistory } from './TraxHistory';

const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/80c615a196014e1ca02ebafef471988d";
const web3 = new Web3(rpcURL);

let ABI = require("../IETabi.js");
const contractAddress = "0xfc5524A98a97Cbc5005367D0dAA2379862396917";
const contract = new web3.eth.Contract(ABI, contractAddress);

export const Transaction = () => {

    const [bal, setbal] = useState(0);
    const [inc, setinc] = useState(0);
    const [exp, setexp] = useState(0);
    const [event, setevent] = useState();
    const [description, setdescription] = useState();
    const [amount, setamount] = useState(0);
    const state = {
        balSt: bal,
        incSt: inc,
        expSt: exp,
        eventSt: event
    };

    const loadBlockChain = async () => {
        try {
            if (Web3.givenProvider) {
                //Enabling web3 injecter in browser
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable();
                // console.log("Web3 provider", web3)

                //getting account address from metamask 
                const accounts = await web3.eth.getAccounts();
                // console.log("Account", accounts);
            }
        }
        catch (error) {
            console.log('Web3 Load Error', error)
        }
    }

    const addTransaction = async () => {
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
                const sendTransaction = await contract.methods.addEntry(description, amount).send({ from: accounts[0] });
                // console.log('sendTransaction', sendTransaction);

                getBalances();
            }
        }
        catch (error) {
            console.log('add transaction method error', error)
        }
    }

    const getBalances = async () => {
        try {
            const balance = await contract.methods.getBalance().call();
            // console.log("Net Balance", balance);
            setbal(balance);

            const inc = await contract.methods.getIncome().call();
            // console.log("Income", inc);
            setinc(inc)

            const exp = await contract.methods.getExpense().call();
            // console.log("Expense", exp);
            setexp(exp)

            let getAllEvents = await contract.getPastEvents('AllEvents', {
                fromBlock: 72000,
                toBlock: "latest"
            });
            // console.log("No of Total Events", getAllEvents);
            setevent(getAllEvents)
        }
        catch (error) {
            console.log('get balances error', error)
        }
    };
    // getBalances()


    return (
        <div className="container">
            <Header />
            <br />
            <button onClick={loadBlockChain} className="btnweb3">Connect Your Wallet </button>
            <Balance nameBal={state.balSt} />
            <TraxSummary nameInc={state.incSt} nameExp={state.expSt} />
            <TraxHistory nameEvent={state.eventSt} />
            <button onClick={() => { getBalances() }} className="btn">
                    Get Transaction History
                </button>

            <div>
                <h3>Adding New Transactions</h3>
                {/* <form > */}
                <div className="form-control">
                    <label >Description</label>
                    <input type="text"
                        value={description}
                        id="description"
                        onChange={(e) => setdescription(e.target.value)}
                        placeholder="Transaction Details"
                    />
                </div>

                <div className="form-control">
                    <label >Amount</label>
                    <input type="number"
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        placeholder="Value of Transaction"
                    />
                </div>
                <button onClick={() => { addTransaction() }} className="btn">
                    Add Transaction
                </button>
                {/* </form> */}
            </div>

        </div>
    )
}
