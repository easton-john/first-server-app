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

html {
  background-image: url('./assets/background-2.jpg');
  background-size: contain;
  background-attachment: fixed;
}

body {
  margin: 0px;
}

div.cocktail-list-form {
  position: sticky;
  top: 20px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-family: 'Cinzel Decorative', cursive;
  color: brown;
  height: 100px;
  margin: none;
}

</style>
