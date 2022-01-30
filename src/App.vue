<template>
  <div id="app">
    <RedOrGreen />
  </div>
</template>

<script>
import RedOrGreen from './components/RedOrGreen.vue';

export default {
  name: 'App',
  components: { RedOrGreen },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
