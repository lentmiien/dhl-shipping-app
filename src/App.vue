<template>
  <div id="app">
    <header>
      <h1>DHL Shipping Label App</h1>
      <nav>
        <router-link to="/upload-csv">Upload CSV</router-link>
        <router-link to="/print-label">Print Label</router-link>
        <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav {
  margin-top: 10px;
}

nav a {
  color: #fff;
  padding: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>
