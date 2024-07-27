<script lang="ts">
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
};
</script>

<template>
  <div class="side-bar" :style="displaySideBarStyle"></div>
</template>

<style scoped>
.side-bar {
  position: relative;
  left: -230px;
  background-color: var(--nav-bg-color-secondary);
  width: 300px;
  height: 100%;
}
</style>
