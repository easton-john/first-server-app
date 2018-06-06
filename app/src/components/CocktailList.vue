<template>
  <section>
    <Cocktail
      v-for="cocktail in cocktails"
      :key="cocktail.name"
      :cocktail="cocktail"
      />

      <AddCocktail :onAdd="handleAdd"/>
  </section>
</template>

<script>
import Cocktail from './Cocktail';
import AddCocktail from './AddCocktail';
import { getCocktails, addCocktail } from '../services/api';

export default {

  data() {
    return {
      cocktails: null
    };
  },

  created() {
    getCocktails()
      .then(cocktails => {
        this.cocktails = cocktails;
      });
  },

  methods: {
    handleAdd(cocktail) {
      return addCocktail(cocktail)
        .then(saved => {
          this.cocktails.push(saved);
        });
    }
  },

  components: {
    Cocktail,
    AddCocktail
  }
};
</script>

<style>

</style>
