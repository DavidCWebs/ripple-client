<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <p>Sample: <pre>rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn</pre></p>
    <form>
      <label for="account-number">Enter account Number:
        <input id="account-number" type="text" v-model="accountNumber">
      </label>
      <div v-if="accountNumber">
        <p>Account Number {{ accountNumber }}</p>
        <button v-on:click="fetch(accountNumber)">Fetch</button>
      </div>
      <p v-else>No Account Number Entered</p>
    </form>
    <hr>
    <div class="columns" v-if="accountInfo.result">
      <div class="column">
        <ul>
          <li v-for="(value, key) in accountInfo.result.account_data">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
      <div class="column">
        <img :src="accountInfo.result.account_data.urlgravatar" alt="" v-if="accountInfo.result.account_data.urlgravatar">
      </div>
    </div>
    <div class="">
      <h2 class="title is-2">Resources</h2>
      <ul>
        <li><a href="https://ripple.com/build/ripple-test-net/">Get Ripple Test Net Credentials</a></li>
        <li><a href="https://ripple.com/build/rippleapi-beginners-guide/#example-browser-usage">Ripple Docs, API</a></li>
        <li><a href="https://www.rempe.us/diceware/#eff">Diceware</a></li>
        <li><a href="https://termhn.github.io/ripplewarpwallet/">Ripple Warp Wallet</a></li>
      </ul>
      <hr>
      <h4 class="title is-4">Bug Notes: "Critical dependency: the request of a dependency is an expression"</h4>
      <ul>
        <li><a href="https://stackoverflow.com/a/42425214/3590673">nodeExternals?</a></li>
        <li><a href="https://github.com/liady/webpack-node-externals">webpack-node-externals</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      accountNumber: '',
      msg: 'Carawebs Simple Ripple App'
    }
  },
  computed: {
    ...mapGetters({
      storedArray: 'storedArray',
      accountInfo: 'accountInfo'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'getAccountInfo'
    })
  }
}
</script>
