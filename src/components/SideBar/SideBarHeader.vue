<script lang="ts">
export default {
  name: "side-bar-header",
  props: {
    isSideBarOpen: Boolean,
  },
  computed: {
    buttonText: function () {
      let title = this.isSideBarOpen ? "Close" : "Open";
      return title;
    },
  },
  methods: {
    toggleSideBar: function () {
      this.$emit("toggleSideBar");
    },
  },
};
</script>

<template>
  <div class="side-bar-header flex-row">
    <h1>EzChat</h1>
    <button class="ez-button" @click="toggleSideBar">{{ buttonText }}</button>
  </div>
</template>

<style scoped>
.side-bar-header {
  background-color: var(--nav-bg-color);
  width: 100%;
  height: 70px;
  justify-content: space-between;
  padding: 8px;
}

.side-bar-header button {
  width: 50px;
  height: 40px;
}
</style>
