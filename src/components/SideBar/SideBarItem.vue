<script setup lang="ts">
import { SideBarItemInterface } from "../../sidebar_list";
import { useRouter } from "vue-router";

interface Props {
  data: SideBarItemInterface;
}
const router = useRouter();

const name = "side-bar-item";
const props = defineProps<Props>();

// TODO: fix pushing route
const setRoute = (address: String) => {
  router.push({ path: "/home" });
};
</script>

<template>
  <div class="side-bar-item flex-row">
    <button class="flex-row ez-button" @click="setRoute(data.path)">
      <p>{{ data.title }}</p>
      <div>
        <!-- <svg
          fill="var(--text-color)"
          height="16px"
          width="16px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330.002 330.002"
          xml:space="preserve"
          transform="rotate(90)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_105_"
              d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21 c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3 C331.972,223.623,330.628,214.221,324.001,209.25z"
            ></path>
          </g>
        </svg> -->
      </div>
    </button>
  </div>
</template>

<style scoped>
.side-bar-item {
  width: 100%;
  height: 40px;
  padding: 2px 0 0 0;
}

.side-bar-item button {
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 5px;
  transition: all var(--trans-fast);
}

.side-bar-item button p {
  font-size: 16px;
}
</style>
