/* eslint-disable */
// const RippleAPI = require('ripple-lib').RippleAPI
import axios from 'axios'
// const host = 'wss://s1.ripple.com/'
const host = 'https://s1.ripple.com:51234/'
const rippleLib = require('ripple-lib')
const RippleAPI = rippleLib.RippleAPI

// export const getAddressInfo = ({ commit }) => {
//   var api = new RippleAPI({
//     server: host
//   })
//   api.connect().then(() => {
//     return api.getServerInfo()
//   }).then((serverInfo) => {
//     commit('setAddressInfo', serverInfo)
//   }).catch(console.error)
// }
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
  // axios.post('https://clsrv.transifex.com/', baseCase).then((response) => {
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
