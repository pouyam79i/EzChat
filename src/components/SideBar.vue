<script lang="ts">
import SideBarHeader from "./SideBar/SideBarHeader.vue";
import SideBarMenu from "./SideBar/SideBarMenu.vue";

export default {
  name: "side-bar",
  data: function () {
    return {
      showSideBar: true,
    };
  },
  computed: {
    displaySideBarStyle: function () {
      return {
        left: this.showSideBar ? "0px" : "-230px",
      };
    },
  },
  components: {
    SideBarHeader,
    SideBarMenu,
  },
};
</script>

<template>
  <div class="side-bar flex-col" :style="displaySideBarStyle">
    <SideBarHeader :is-side-bar-open="showSideBar" />
    <SideBarMenu />
  </div>
</template>

<style scoped>
.side-bar {
  position: relative;
  left: -230px;
  background-color: var(--bg-color-secondary);
  width: 300px;
  height: 100%;
}
</style>
