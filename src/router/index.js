import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PlanetList from "@/components/PlanetList";
import PlanetView from "@/components/PlanetView";

Vue.use(Router);

// const PlanetView = { template: "<h1>PlanetView</h1>" };

export default new Router({
  routes: [
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "PlanetList",
      component: PlanetList
    },
    {
      path: "/planetview/:id",
      name: "PlanetView",
      component: PlanetView
    }
  ]
});
