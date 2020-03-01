<template>
  <div id="app">
    <b-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
    <ProgressBar />
    <router-view />
  </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar';

export default {
  name: 'App',
  components: {
    ProgressBar
  }
}
</script>
