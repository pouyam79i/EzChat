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
  methods: {
    toggleSideBar: function () {
      this.showSideBar = !this.showSideBar;
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
    <SideBarHeader
      :is-side-bar-open="showSideBar"
      @toggleSideBar="toggleSideBar"
    />
    <SideBarMenu />
  </div>
</template>

<style scoped>
.side-bar {
  z-index: 100;
  position: relative;
  left: -230px;
  top: 0px;
  background-color: var(--bg-color-secondary);
  width: 300px;
  height: 100%;
  transition: left var(--trans-mid);
}
</style>
