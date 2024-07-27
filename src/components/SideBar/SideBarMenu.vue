<script lang="ts">
import SideBarItem from "./SideBarItem.vue";
import SIDE_BAR_ITEMS, { SideBarItemInterface } from "../../sidebar_list";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "side-bar-menu",
  data: function () {
    return {
      items: SIDE_BAR_ITEMS
    };
  },
  components: { SideBarItem },
});
</script>

<template>
  <div class="side-bar-menu flex-col">
    <SideBarItem v-for="item in items" :data="item" />
  </div>
</template>

<style scoped>
.side-bar-menu {
  width: 100%;
  height: 100%;
  padding: 2px 4px 0 4px;
}
</style>
