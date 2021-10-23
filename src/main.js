import Vue from "vue";
import App from "./App.vue";
import Crew from "./components/Crew.vue";
import Destination from "./components/Destination.vue";
import Technology from "./components/Technology.vue";

import Home from "./Home.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/crew", component: Crew },
  { path: "/destination", component: Destination },
  { path: "/technology", component: Technology },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
