import { Component, createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import SIDE_BAR_ITEMS from "./sidebar_list";
import { createMemoryHistory, createRouter } from "vue-router";

// TODO: add dynamic route
// const routes = SIDE_BAR_ITEMS.map((item) => {
//   return {
//     path: item.path,
//     component: () => import("./pages/" + item.name + ".vue"),
//   };
// });

const routes = [
  { path: "/chats", component: () => import("./pages/ChatList.vue") },
];

console.log(routes);

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
