<script lang="ts">
import EzChat from "./components/EzChat.vue";
export default {
  name: "app",
  components: { EzChat },
};
</script>

<template>
  <div id="app">
    <EzChat></EzChat>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
