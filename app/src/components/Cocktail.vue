<template>
  <div>
    <ul>
      <h2><b>{{ cocktail.name }}</b></h2>
      <li><b style="color:bisque">Alcohol:</b> {{ cocktail.alcohol }}</li>
      <li><b style="color:bisque">Main Ingredients:</b> {{ cocktail.ingredients }}</li>
      <li><b style="color:bisque">Served:</b> {{ cocktail.served }}</li>
      <li><b style="color:bisque">Standard garnish:</b> {{ cocktail.garnish }}</li>
      <li><b style="color:bisque">Tried?</b> {{ cocktail.tried }}</li>
    </ul>
    <img :src="cocktail.image">  
  </div>
</template>

<script>
export default {
  props: ['cocktail']
};
</script>

<style scoped>

h2 {
  color: mediumaquamarine;
}
ul {
  list-style-type: none;
  width: 50%;
  margin: 0;
  padding: 0;
  font-size: 1.25em;
}

li {
  color: whitesmoke;
  margin-bottom: 2px;
}

img {
  display: flex;
  align-self: center;
  width: 225px;
}

div {
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, .75);
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;

}

</style>


