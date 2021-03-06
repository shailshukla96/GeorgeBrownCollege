module.exports = {
  
  default: {

    deployment: {
      host: "localhost", // Host of the blockchain node
      port: 8555, // Port of the blockchain node
      type: "ws"
    },

    dappConnection: [
      "$WEB3", 
      "ws://localhost:8546",
      "http://localhost:8545"
    ],

    gas: "auto",

    contracts: {
      CryptoLoan: {},
    }
  },

  development: {
    dappConnection: [
      "ws://localhost:855",
      "http://localhost:8545",
      "$WEB3"  
    ]
  },
};
