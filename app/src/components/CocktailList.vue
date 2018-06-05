<template>
  <div>
    <section>
      <Cocktail
        v-for="cocktail in cocktails"
        :key="cocktail.name"
        :cocktail="cocktail"
       />
    </section>
  </div>
</template>

<script>
import Cocktail from './Cocktail';
import { getCocktails } from '../services/api';

export default {

  data() {
    return {
      cocktails: null
    };
  },

  created() {
    getCocktails()
      .then(cocktails => {
        this.cocktails = cocktails.cocktails;
      });
  },
  components: {
    Cocktail
  }
};
</script>

<style>

</style>
