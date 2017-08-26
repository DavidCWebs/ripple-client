const qrcode = require('qrcode')

qrcode.toDataURL("Draw a QR Code in my terminal", function(err, url) {
  console.log(url)
})
