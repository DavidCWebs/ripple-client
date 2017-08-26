/* eslint-disable */
import axios from 'axios'
import rippleKeypair from 'ripple-keypairs'
import qrcode from 'qrcode'
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

export const getRestAccountTransactions = ({commit}, accountNumber) => {
  axios.get(`https://data.ripple.com/v2/accounts/${accountNumber}/transactions`)
  .then((response) => {
    commit('setRestAccountTransactions', response.data)
  }).catch((error) => {
    console.error(error)
  })
}

const generateQrcode = ({}, value) => {
  let qr = ''
  qrcode.toDataURL(value, function(err, dataUrl) {
    qr = dataUrl
  })
  return qr
}

export const generateKeypair = ({commit}, userInputEntropy) => {
  const secret = rippleKeypair.generateSeed()
  const keypair = rippleKeypair.deriveKeypair(secret)
  const address = rippleKeypair.deriveAddress(keypair.publicKey)
  commit('setDerivedAddress', address)
  commit('setDerivedKeypair', keypair)
  commit('setRippleAddressData', {
    "secret": {
      "value": secret,
      "qrcode": generateQrcode({}, secret)
    },
    "address": {
      "value": address,
      "qrcode": generateQrcode({}, address)
    }
  })
}

// const generateQrcode = (value) => {
//   console.log("here!")
//   qrcode.toDataURL(value, function(err, url) {
//     return dataUrl
//   })
// }

export const generateQR = ({commit}, value) => {
  qrcode.toDataURL(value, function(err, url) {
    commit('setQR', url)
  })
}
