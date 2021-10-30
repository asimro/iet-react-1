
const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "traxType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_detail",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "_amount",
        "type": "int256"
      }
    ],
    "name": "traxHistory",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_detail",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "_amount",
        "type": "int256"
      }
    ],
    "name": "addEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "int256",
        "name": "balance",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getIncome",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getExpense",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

module.exports = abi;

