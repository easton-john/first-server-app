<template>
  <div class="main-div">

    <h1>Cocktail Alley</h1>

    <CocktailList />

  </div>
</template>

<script>
import CocktailList from './components/CocktailList';

export default {

  components: {
    CocktailList
  }

};
</script>

<style>

h1 {
  text-align: center;
  font-size: 3em;
}

</style>
