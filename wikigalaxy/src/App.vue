<template>
  <PlanetsVue/>
</template>

<script>
import PlanetsVue from './components/PlanetsVue.vue'

export default {
  name: 'App',
  components: {
    PlanetsVue
  }
}
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
