<template>
  <div>
    <h1 class="color-red">{{name}}</h1>
    <input type="text" @input="filterArray" v-model="search_text">
    <button @click="alertMethod">Show Alert</button>
    <h1
      style="cursor: pointer"
      @click="morePlanetInfo(planet)"
      v-for="planet in filteredPlanets"
      v-bind:key="planet.name"
    >{{planet.name}}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PlanetList",
  props: {
    name: String
  },
  data() {
    return {
      planets: [],
      search_text: "",
      filteredPlanets: this.planets
    };
  },
  mounted() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      this.planets = res.data.results;
      this.filteredPlanets = res.data.results;
      // console.log(this.planets)
    });
  },
  methods: {
    filterArray() {
      this.filteredPlanets = this.planets.filter(planet => {
        return planet.name
          .toUpperCase()
          .includes(this.search_text.toUpperCase());
      });
    },
    alertMethod() {
      alert("Button was clicked!");
    },
    morePlanetInfo(planet) {
      // alert(planet.name);
      let index;
      this.planets.map((e, i) => {
        if (e.name === planet.name) {
          index = i;
        }
      });
      this.$router.push("/planetview/" + +(index + 2));
    }
  }
};
</script>