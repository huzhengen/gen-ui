import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/Home.vue"),
    },
    {
      path: "/doc",
      component: () => import("./components/Doc.vue"),
    },
    {
      path: "/components",
      component: () => import("./components/Doc.vue"),
      children: [
        {
          path: "switch",
          component: () => import("./components/SwitchDemo.vue"),
        },
        {
          path: "icon",
          component: () => import("./components/IconDemo.vue"),
        },
        {
          path: "button",
          component: () => import("./components/ButtonDemo.vue"),
        },
      ],
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
