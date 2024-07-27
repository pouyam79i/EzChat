<script lang="ts">
import SideBar from "./SideBar.vue";

export default {
  name: "ez-chat",
  components: { SideBar },
};
</script>

<template>
  <div id="ez-chat" class="ez-chat"><SideBar /></div>
</template>

<style scoped>
.ez-chat {
  width: 50%;
  height: 95%;
  background-color: var(--bg-color);
  border-radius: 30px;
  overflow: hidden;
}
</style>
