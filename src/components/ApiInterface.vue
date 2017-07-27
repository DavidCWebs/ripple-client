<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <p>See: <a href="https://ripple.com/build/data-api-v2">Ripple API Docs</a></p>
    <p>Sample: <pre>rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn</pre></p>
    <form>
      <label for="account-number">Enter account Number:
        <input id="account-number" type="text" v-model="accountNumber">
      </label>
      <div v-if="accountNumber">
        <p>Account Number {{ accountNumber }}</p>
        <button v-on:click="fetchAccount(accountNumber)">Fetch details</button>
        <button v-on:click="fetchTransactions(accountNumber)">Get Transactions</button>
      </div>
      <p v-else>No Account Number Entered</p>
    </form>
    <hr>
    <div class="columns" v-if="accountInfo">
      <div class="column">
        <ul>
          <li v-for="(value, key) in accountInfo.account_data">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
        <div class="card" v-for="transaction in transactions.transactions"><pre>{{ transaction | pretty }}</pre></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'api-interface',
  data () {
    return {
      accountNumber: '',
      msg: 'REST API Interface'
    }
  },
  computed: {
    ...mapGetters({
      accountInfo: 'restAccountInfo',
      transactions: 'restAccountTransactions'
    })
  },
  methods: {
    ...mapActions({
      fetchAccount: 'getRestAccountInfo',
      fetchTransactions: 'getRestAccountTransactions'
    })
  }
}
</script>
