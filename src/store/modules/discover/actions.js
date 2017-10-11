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
  axios.get(`https://data.ripple.com/v2/accounts/${address}/balances`)
  .then((response) => {
    console.log(response)
    commit('setAccountBalances', response.data)
  }).catch((error) => {
    console.error(error)
  })
}
