<script lang="ts">
export default {
  name: "main-panel",
};
</script>

<template>
  <div class="main-panel flex-col">
    <!-- <slot></slot> -->
    this is main panel
  </div>
</template>

<style scoped>
.main-panel {
  width: 50%;
  height: 95%;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 30px;
  justify-content: center;
  padding-left: 60px;
}
</style>
