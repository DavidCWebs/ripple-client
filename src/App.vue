<template>
  <div id="app">
    <!-- <img class="logo-container" src="./assets/carawebs-icon.svg"> -->
    <div class="container">
      <top-header></top-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/common/TopHeader'
export default {
  name: 'app',
  components: {
    TopHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-container {
  width: 15%;
  margin: 0 auto;
}
</style>
