<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <form>
      <label for="enter-entropy">Enter entropy string (if required)
        <input id="enter-entropy" type="text" size="60" v-model="userInputEntropy">
      </label>
      <div>
        <button v-on:click="generateKeypair(userInputEntropy)">Generate</button>
      </div>
    </form>
    <hr>
    <div class="columns">
      <div class="column" v-if="derivedAddress">
        <h2 class="title is-2">Generated Ripple Address</h2>
        <div>
          <ul>
            <li>Address: {{ rippleAddressData.address.value }}</li>
            <li>Secret: {{ rippleAddressData.secret.value }}</li>
          </ul>
          <h3 class="title is-3">Public</h3>
          <img :src="rippleAddressData.address.qrcode" alt="">
          <h3 class="title is-3">Private</h3>
          <img :src="rippleAddressData.secret.qrcode" alt="">
        </div>
      </div>
      <div class="column" v-if="derivedKeypair.privateKey">
        <div>
          <h2 class="title is-2">Generated Keypair</h2>
          <ul>
            Private Key: {{ derivedKeypair.privateKey }}
            Public Key: {{ derivedKeypair.publicKey }}
          </ul>
        </div>
      </div>
    </div>
    <h2 class="title is-2">QR Code Test</h2>
    <input id="enter-qr" type="text" size="60" v-model="userInputQR">
    <div>
      <button v-on:click="generateQR(userInputQR)">Generate QR Code</button>
    </div>
    <img :src="qrcode" alt="">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'generate',
  data () {
    return {
      userInputEntropy: '',
      userInputQR: '',
      msg: 'Generate Ripple Keypair'
    }
  },
  computed: {
    ...mapGetters({
      derivedAddress: 'derivedAddress',
      derivedKeypair: 'derivedKeypair',
      rippleAddressData: 'rippleAddressData',
      qrcode: 'qrcode'
    })
  },
  methods: {
    ...mapActions({
      generateKeypair: 'generateKeypair',
      generateQR: 'generateQR'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
