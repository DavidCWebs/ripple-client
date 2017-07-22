/* eslint-disable */
import axios from 'axios'
import rippleKeypair from 'ripple-keypairs'
// const host = 'wss://s1.ripple.com/'
const host = 'https://s1.ripple.com:51234/'

let accountTest = {
  "method": "account_info",
  "params": [
    {
      "account": "r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59",
      "strict": true,
      "ledger_index": "validated"
    }
  ]
}
const baseCase = {
  "id": 2,
  "command": "account_info",
  "account": "r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59",
  "strict": true,
  "ledger_index": "current",
  "queue": true
}

// Connect by Websocket
// export const simpleJsonRpc = ({commit}, accountNumber) => {
export const getAccountInfo = ({commit}, accountNumber) => {
  console.log("ACTION: "+accountNumber)
  baseCase.account = accountNumber
  var socket = new WebSocket('wss://s1.ripple.com/')
  socket.onopen = () => {
    socket.send(JSON.stringify(baseCase))
    socket.onmessage = function(response) {
      console.log("ACCT: " + response.data) // upon message
      commit('setAccountInfo', response.data)
    }
  }
}

// REST API
export const getRestAccountInfo = ({commit}, accountNumber) => {
  axios.get(`https://data.ripple.com/v2/accounts/${accountNumber}`)
  .then((response) => {
    console.log(response);
    commit('setRestAccountInfo', response.data)
  }).catch((error) => {
    console.error(error)
  })
}

export const generateKeypair = ({commit}, userInputEntropy) => {
  const seed = rippleKeypair.generateSeed()
  const keypair = rippleKeypair.deriveKeypair(seed)
  const address = rippleKeypair.deriveAddress(keypair.publicKey)
  commit('setDerivedAddress', address)
  commit('setDerivedKeypair', keypair)
  console.log(keypair)
}
