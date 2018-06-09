<template>
  <li>
    <section v-if="!editing">
      <img :src="cocktail.image">
      <h2><b>{{ cocktail.name }}</b></h2>
      <p><b>Alcohol:</b> {{ alcohol }}</p>
      <p><b>Main Ingredients:</b> {{ cocktail.ingredients }}</p>
      <p><b>Served:</b> {{ cocktail.served }}</p>
      <p><b>Standard garnish:</b> {{ cocktail.garnish }}</p>
      <p><b>Tried: </b> <span v-if="cocktail.tried">Yes</span> <span v-else>No</span></p>    
    </section>

    <CocktailForm
    v-else
    label="Update"
    header=""
    :cocktail="cocktail"
    :alcohols="alcohols"
    :onEdit="handleUpdate"
    />


    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit' }}</button>
    <button @click="handleRemove" type="submit">DELETE</button> 

  </li>
</template>

<script>
import CocktailForm from './CocktailForm';

export default {

  data() {
    return {
      editing: false
    };
  },  

  computed: {
    alcohol() {
      if(!this.alcohols) return null;
      const alcohol = this.alcohols.find(a => a.id === this.cocktail.alcoholID);
      return alcohol ? alcohol.alcohol : 'Unknown';
    }
  },

  methods: {
    handleRemove() {
      return this.onDelete(this.cocktail);
    },

    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  },

  props: [
    'onDelete',
    'onUpdate',
    'cocktail',
    'alcohols',
  ],

  components: {
    CocktailForm
  }
};

</script>

<style scoped>

li {
  margin-bottom: 50px;
}

img {
  float: right;
  width: 250px;
}

button {
  margin-right: 10px;
}

</style>


