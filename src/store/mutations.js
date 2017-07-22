// Address info
export const setAccountInfo = (state, info) => {
  state.accountInfo = JSON.parse(info)
}

export const setRestAccountInfo = (state, info) => {
  state.restAccountInfo = info
}

export const setDerivedAddress = (state, address) => {
  state.derivedAddress = address
}

export const setDerivedKeypair = (state, keypair) => {
  state.derivedKeypair = keypair
}
