<script lang="ts">
import MainPanel from "./MainPanel.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "ez-chat",
  components: { SideBar, MainPanel },
};
</script>

<template>
  <div id="ez-chat flex-col" class="ez-chat">
    <SideBar />
    <div class="main-panel-container flex-col">
      <MainPanel />
    </div>
  </div>
</template>

<style scoped>
.ez-chat {
  position: relative;
  z-index: 0;
  width: 50%;
  height: 95%;
  background-color: var(--bg-color);
  border-radius: 30px;
  overflow: hidden;
}

.main-panel-container {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
}
</style>
