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
export const oldSimpleJsonRpc = ({commit}) => {
  axios.post('wss://s1.ripple.com/push:443', baseCase).then((response) => {
    console.log("RESPONSE: " + response)
    commit('setAddressInfo', response)
  }).catch((error) => {
    console.log('Error Condition')
    console.error(error)
  })
}

export const simpleJsonRpc = ({commit}, accountNumber) => {
  console.log(accountNumber)
  baseCase.account = accountNumber

  var socket = new WebSocket('wss://s1.ripple.com/')

  socket.onopen = () => {
    socket.send(JSON.stringify(baseCase))
    socket.onmessage = function(response) {
      console.log(response.data) // upon message
      commit('setAddressInfo', response.data)
    }
  }
}

export const generateKeypair = ({commit}, userInputEntropy) => {
  const seed = rippleKeypair.generateSeed()
  const keypair = rippleKeypair.deriveKeypair(seed)
  const address = rippleKeypair.deriveAddress(keypair.publicKey)
  commit('setDerivedAddress', address)
  commit('setDerivedKeypair', keypair)
  console.log(keypair)
}
