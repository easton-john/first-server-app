<template>
  <div>
    <h2>{{ cocktail.name }}</h2>
    <ul>
      <li><b>Alcohol:</b> {{ cocktail.alcohol }}</li>
      <li><b>Main Ingredients:</b> {{ cocktail.ingredients }}</li>
      <li><b>Served:</b> {{ cocktail.served }}</li>
      <li><b>Tried?</b> {{ cocktail.tried }}</li>
    </ul>
    <img :src="cocktail.image">
  </div>
</template>

<script>
export default {
  props: ['cocktail']
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img {
  width: 250px;
}
</style>
