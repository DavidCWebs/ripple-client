<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in storedArray">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key) in addressInfo.result.account_data">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Carawebs Simple Ripple App'
    }
  },
  computed: {
    ...mapGetters({
      storedArray: 'storedArray',
      addressInfo: 'addressInfo'
    })
  },
  methods: {
    ...mapActions({
      getAddressInfo: 'getAddressInfo',
      simpleJsonRpc: 'simpleJsonRpc'
    })
  },
  mounted () {
    // this.getAddressInfo()
    this.simpleJsonRpc()
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
