import React, { useState } from 'react';
import './App.css';

//import components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TraxSummary } from './components/TraxSummary';
import { TraxHistory } from './components/TraxHistory';
import { AddTrax } from './components/AddTrax'; import React from 'react'


const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545";
// const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(rpcURL);
// const accountS = '0x70a52deD8F307D00996AEB9D6FBF2552cc0d10B7';
// const private_key = "ae35c844d5eb27e636030f741f77879bb1afbe1266df10cac9c946663e79ed74";
// const Private_KeyS = Buffer.from(private_key, 'hex');

// const detail = "Bill";
// const amt = "-50";

let ABI = require("./IETabi.js");
const contractAddress = "0xB1D553fB4F823cdcB8Dbc603BA74832F614A2a4d";

const contract = new web3.eth.Contract(ABI, contractAddress);

export const Transaction = () => {

    const [bal, setbal] = useState(0);
    const [inc, setinc] = useState(0);
    const [exp, setexp] = useState(0);
    const [event, setevent] = useState(0);
    const [description, setdescription] = useState(0);
    const [amount, setamount] = useState(0);





    const contractWrite = async () => {
        try {
            // creating transaction object

            // let txCount = await web3.eth.getTransactionCount(accountS);
            // const txObject = {
            //     nonce: web3.utils.toHex(txCount),
            //     to: contractAddress,
            //     data: contract.methods.addEntry(detail, amt).encodeABI(),
            //     gasLimit: web3.utils.toHex(6000000),
            //     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
            // }

            // // signing transaction with private key
            // const tx = new Tx(txObject);      //{ chain: 'development', hardfork: 'petersburg' }
            // tx.sign(Private_KeyS);
            // const serialized = tx.serialize();
            // const raw = '0x' + serialized.toString('hex');

            // // sending transaction on blockchain
            // const singedTransaction = await web3.eth.sendSignedTransaction(raw);
            // console.log("singedTransaction", singedTransaction);

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
                fromBlock: 0,
                toBlock: "latest"
            });
            // console.log("No of Total Events", getAllEvents);
            setevent(getAllEvents)

            // let getEvent = await contract.getPastEvents('traxHistory',{
            //     fromBlock:  0,
            //     toBlock: "latest"
            // });

        }
        catch (error) {
            console.log('error', error)
        }
    }
    contractWrite()



    return (
        <div className="container">

            <Header />
            <br />
            <Balance nameBal={bal} />
            <TraxSummary nameInc={inc} nameExp={exp} />
            <TraxHistory nameEvent={event} />
            <AddTrax nameDes={description} nameAmt={amount} />
            
        </div>
    )
}
