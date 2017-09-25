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
