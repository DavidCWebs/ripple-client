<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <form>
      <label for="enter-entropy">Enter the public Ripple address
        <input id="enter-entropy" type="text" size="60" v-model="address">
      </label>
      <div>
        <button v-on:click="getAccountInfo(address)">Get Info</button>
      </div>
    </form>
    <hr>
    <div class="columns">
      <div class="column" v-if="accountInfo">
        <h2 class="title is-2">Ripple Info</h2>
        <div>
          {{ accountInfo }}
          <hr>
          <li v-for="balance in accountBalances.balances">{{ balance.value }} {{ balance.currency }}</li>
          <pre>{{ accountBalances }}</pre>
        </div>
      </div>
    </div>
    <h2 class="title is-2">References</h2>
    <ul>
      <li>Account Balances are balances held or owed by a specific XRP ledger account. See: <a href="https://ripple.com/build/data-api-v2/#get-account-balances">Get Account Balances</a></li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'discover',
  data () {
    return {
      address: '',
      msg: 'Dicover Ripple Account Information'
    }
  },
  computed: {
    ...mapGetters({
      accountInfo: 'discover/accountInfo',
      accountBalances: 'discover/accountBalances'
    })
  },
  methods: {
    ...mapActions({
      getAccountInfo: 'discover/getInfo'
    })
  }
}
</script>
