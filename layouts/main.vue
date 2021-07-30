<template>
  <div class="App">
    <MainNavbar />
    <Nuxt />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.App {
  background-color: #282c34;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
</style>
