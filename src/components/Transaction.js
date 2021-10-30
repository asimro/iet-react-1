import React, { useState } from 'react';
import '../App.css';

//import components
import { Header } from './Header';
import { Balance } from './Balance';
import { TraxSummary } from './TraxSummary';
import { TraxHistory } from './TraxHistory';
// import { AddTrax } from './AddTrax';


const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/80c615a196014e1ca02ebafef471988d";
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(rpcURL);

const accountS = '0x53Acdd0B5C83B9BA58849f07B8B88301C37f9619';
const private_key = "c85927cd1d3aedcfc615155149aaa8c13ca26f9d77704ed71abfc9e15a9949ef";
const Private_KeyS = Buffer.from(private_key, 'hex');

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


    const addTransaction = async () => {
        try {
            // creating transaction object
            let txCount = await web3.eth.getTransactionCount(accountS);
            const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            data: contract.methods.addEntry(description, amount).encodeABI(),
            gasLimit: web3.utils.toHex(6000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // signing transaction with private key
        const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' });
        tx.sign(Private_KeyS);
        const serialized = tx.serialize();
        const raw = '0x' + serialized.toString('hex');

        // sending transaction on blockchain
        const singedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("singedTransaction", singedTransaction);
            getBalances();
            
        }
        catch (error) {
            console.log('add transactions error', error)
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

            // let getEvent = await contract.getPastEvents('traxHistory',{
            //     fromBlock:  0,
            //     toBlock: "latest"
            // });
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
            <Balance nameBal={state.balSt} />
            <TraxSummary nameInc={state.incSt} nameExp={state.expSt} />
            <TraxHistory nameEvent={state.eventSt} />

            {/* <AddTrax nameDes={description} nameAmt={amount} /> */}
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
