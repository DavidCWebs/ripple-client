<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <form>
      <label for="enter-entropy">Enter the public Ripple address
        <input id="enter-entropy" type="text" size="60" v-model="address">
      </label>
      <div>
        <button v-on:click="getAccountInfo(address)">Generate</button>
      </div>
    </form>
    <hr>
    <div class="columns">
      <div class="column" v-if="accountInfo">
        <h2 class="title is-2">Ripple Info</h2>
        <div>
          {{ accountInfo }}
        </div>
      </div>
    </div>
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
      accountInfo: 'discover/accountInfo'
    })
  },
  methods: {
    ...mapActions({
      getAccountInfo: 'discover/getInfo'
    })
  }
}
</script>
