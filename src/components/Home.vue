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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
