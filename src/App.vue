<script lang="ts">
import EzChat from "./components/EzChat.vue";
export default {
  name: "app",
  components: { EzChat },
};
</script>

<template>
  <div id="app" class="flex-col">
    <EzChat></EzChat>
  </div>
</template>

<style scoped>
#app {
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>
