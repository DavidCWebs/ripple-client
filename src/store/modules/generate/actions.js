import rippleKeypair from 'ripple-keypairs'
import qrcode from 'qrcode'

export const generateKeypair = ({commit}, options) => {
  // If collecting user-generated entropy, it should be passed in as an array of
  // integers < 255.
  // options.entropy = [76, 58, 29, 33, 63, 189, 251, 20, 199, 194, 141, 96, 148, 105, 179, 65]
  console.log(options)
  const secret = rippleKeypair.generateSeed(options)
  const keypair = rippleKeypair.deriveKeypair(secret)
  const address = rippleKeypair.deriveAddress(keypair.publicKey)
  commit('setDerivedAddress', address)
  commit('setDerivedKeypair', keypair)
  commit('setRippleAddressData', {
    'secret': {
      'value': secret,
      'qrcode': generateQrcode({}, secret)
    },
    'address': {
      'value': address,
      'qrcode': generateQrcode({}, address)
    }
  })
}

const generateQrcode = ({commit}, value) => {
  let qr = ''
  qrcode.toDataURL(value, function (err, dataUrl) {
    if (err) {
      console.log('Error generating qrcode.')
      return
    }
    qr = dataUrl
  })
  return qr
}

export const generateQR = ({commit}, value) => {
  qrcode.toDataURL(value, function (err, url) {
    if (err) {
      console.log('Error generating qrcode.')
      console.log(err)
      return
    }
    commit('setQR', url)
  })
}
