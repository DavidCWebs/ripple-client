<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://carawebs.com">
        <img src="../../assets/carawebs-icon.svg" alt="Carawebs" width="40" height="40"> Carawebs
      </a>
      <a class="navbar-item is-hidden-desktop" href="#" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/DavidRedBranch" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuExample" v-on:click="triggerDropdown" v-bind:class="{'is-active': burgerDropdownActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'home'}" class="navbar-item">Home</router-link>
        <router-link :to="{ name: 'generate'}" class="navbar-item">Generate</router-link>
        <router-link :to="{ name: 'api-interface'}" class="navbar-item">REST API</router-link>
        <router-link :to="{ name: 'discover'}" class="navbar-item">Discover</router-link>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
          Github
        </a>
    </div>
  </div>
</nav>
</template>
<script>
  export default {
    name: 'navbar',
    methods: {
      triggerDropdown () {
        console.log('dropdown here!!!')
      }
    }
  }
</script>
