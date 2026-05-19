<template>
  <main class="app">
    <router-view />
  </main>
</template>

<script setup>
</script>

<style lang="scss">
.app {
  min-height: 100vh;

  background:
    radial-gradient(circle at top, rgba(66, 255, 136, 0.15), transparent 30%),
    linear-gradient(to bottom, #0f172a, #020617);

  color: #f8fafc;

  font-family:
    Inter,
    system-ui,
    sans-serif;
}
</style>