<template>
  Get AC Balances
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
</template>

<script>
export default {
  name: 'account-balances',
  data () {
    return {
      accountNumber: ''
    }
  },
}
</script>
