// Address info
export const setAddressInfo = (state, info) => {
  state.addressInfo = JSON.parse(info)
}

export const setDerivedAddress = (state, address) => {
  state.derivedAddress = address
}

export const setDerivedKeypair = (state, keypair) => {
  state.derivedKeypair = keypair
}
