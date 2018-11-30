<template>
  <div>
    <h1 class="color-red">Planet: {{planet}}</h1>
    <h2 class="color-red">Population: {{population}}</h2>
    <h2 class="color-red">Gravity: {{gravity}}</h2>
    <h2 class="color-red">Terrain: {{terrain}}</h2>
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
      planet: [],
      population: "",
      gravity: "",
      terrain: "",
      search_text: "",
      filteredPlanets: this.planets
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    axios
      .get("https://swapi.co/api/planets/" + this.$route.params.id)
      .then(res => {
        console.log(res);
        this.planet = res.data.name;
        this.population = res.data.population;
        this.gravity = res.data.gravity;
        this.terrain = res.data.terrain;
        console.log(this.planets);
      });
  }
};
</script>