<template>
  <div id="app">
    <router-view></router-view>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Wiki des Planètes</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
          </ul>
        </div>
      </div>
    </nav>

    <main role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
