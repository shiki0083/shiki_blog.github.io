import Vue from "vue";
import iView from "iview";
import Cookies from "js-cookie";
import VueRouter from "vue-router";
import { routers } from "./router";

Vue.use(VueRouter);

// 防止重复路由点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const RouterConfig = {
  mode: "history",
  base: process.env.NODE_ENV === "development" ? "/admin" : "/",
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    next(false);
  }
  iView.LoadingBar.start();
  console.log("routerrouter", router);
  console.log("Cookies", Cookies);
  console.log("to", to);
  console.log("from", from);
  if (!Cookies.get("user") && to.name !== "login" && to.meta.login) {
    console.log("1");
    next({
      name: "login",
      query: { redirect: router.currentRoute.fullPath }
    });
  } else if (Cookies.get("user") && to.name === "login") {
    console.log("2");
    next({
      name: "home"
    });
  } else {
    console.log("3");
    next();
  }
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});

export { router };
