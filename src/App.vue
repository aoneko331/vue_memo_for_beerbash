<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  border: 1px solid $rightPrimary;
}
</style>

<style lang="scss">
body {
  margin: 0;
}
html {
  background-color: $rightPrimary;
}
</style>
