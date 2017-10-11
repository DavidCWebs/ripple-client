// Address info
export const setAccountInfo = (state, info) => {
  state.accountInfo = JSON.parse(info)
}

// export const setRestAccountInfo = (state, info) => {
//   state.restAccountInfo = info
// }
//
// export const setRestAccountTransactions = (state, data) => {
//   state.restAccountTransactions = data
// }

export const setDerivedAddress = (state, address) => {
  state.derivedAddress = address
}

export const setDerivedKeypair = (state, keypair) => {
  state.derivedKeypair = keypair
}

export const setRippleAddressData = (state, array) => {
  state.rippleAddressData = array
}

export const setQR = (state, qrcode) => {
  state.qrcode = qrcode
}
