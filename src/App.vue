<template>
  <div id="app">
    <vue-js-front-end msg="Welcome to my Vue.js App" />
  </div>
</template>

<script>
import VueJsFrontEnd from './components/VueJsFrontEnd.vue';

export default {
  name: 'App',
  components: {
    VueJsFrontEnd
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
