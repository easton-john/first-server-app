<template>
  <div>
    <h2>Add a Cocktail!</h2>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" name="name" placehodler="Name" required v-model="cocktail.name">
      <label>Alcohol</label>
      <input type="text" name="name" placehodler="Name" required v-model="cocktail.name">
      <label>Ingredients</label>
      <input type="text" name="name" placehodler="Name" required v-model="cocktail.name">
      <label>Served</label>
      <input type="text" name="name" placehodler="Name" required v-model="cocktail.name">
      <label>Garnish</label>
      <input type="text" name="name" placehodler="Name" required v-model="cocktail.name">
      <button type="submit">Enter</button>
      

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      cocktail: { name: '' }
    };
  },

  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },

  methods: {
    handleSubmit() {
      this.onAdd(this.cocktail);
        // this fires when save is complete and data added to nieghborhoods array
        // .then(() => {
        //   this.neighborhood = initCocktail();
        //});
    }
  }

};
</script>

<style>

</style>
