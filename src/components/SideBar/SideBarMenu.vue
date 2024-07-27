<script lang="ts">
import SideBarItem from "./SideBarItem.vue";

export default {
  name: "side-bar-menu",
  components: { SideBarItem },
};
</script>

<template>
  <div class="side-bar-menu flex-col">
    <SideBarItem />
  </div>
</template>

<style scoped>
.side-bar-menu {
  width: 100%;
  height: 100%;
  padding: 2px 4px 0 4px;
}
</style>
