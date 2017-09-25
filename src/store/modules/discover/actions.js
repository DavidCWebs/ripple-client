// const Ripple = require('ripple-lib').RippleAPI
// import Ripple from 'ripple-lib'
import axios from 'axios'

export const getInfo = ({commit}, address) => {
  axios.get(`https://data.ripple.com/v2/accounts/${address}`)
  .then((response) => {
    console.log(response)
    commit('setRestAccountInfo', response.data)
  }).catch((error) => {
    console.error(error)
  })
  // const api = new Ripple.RippleAPI({
  //   server: 'wss://s1.ripple.com' // Public rippled server
  // })
  // api.connect().then(() => {
  //   console.log('getting account info for', address)
  //   return api.getAccountInfo(address)
  // }).then(info => {
  //   commit('accountInfo', info)
  //   console.log(info)
  //   console.log('getAccountInfo done')
  // }).then(() => {
  //   return api.disconnect()
  // }).then(() => {
  //   console.log('done and disconnected.')
  // }).catch(console.error)
}
