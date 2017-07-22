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
          {{ derivedAddress }}
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'generate',
  data () {
    return {
      userInputEntropy: '',
      msg: 'Generate Ripple Keypair'
    }
  },
  computed: {
    ...mapGetters({
      derivedAddress: 'derivedAddress',
      derivedKeypair: 'derivedKeypair'
    })
  },
  methods: {
    ...mapActions({
      generateKeypair: 'generateKeypair'
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
