<template>
  <div class="form">

    <h2 id="add-cocktail">Add a Cocktail</h2>

    <form @submit.prevent="handleSubmit">
      <input id="name" type="text" name="name" placeholder="Name" required v-model="cocktail.name">
      <input type="text" name="alcohol" placeholder="Alcohol" required v-model="cocktail.alcohol">
      <input type="text" name="ingredients" placeholder="Ingredients" required v-model="cocktail.ingredients">
      <input type="text" name="served" placeholder="Served" v-model="cocktail.served">
      <input type="text" name="garnish" placeholder="Garnish" v-model="cocktail.garnish">
      <input type="text" name="image" placeholder="Enter image url" v-model="cocktail.image">
      <select v-model="cocktail.tried">
        <option value disabled>Tried?</option>
        <option value="Yes!">Yes</option>
        <option value="No? What are you waiting for?">No</option>
      </select>
      <button type="submit">Enter</button>
    </form>

  </div>
</template>

<script>

const initCocktail = () => {
  return {
    name: '',
    alcohol: '',
    ingredients: '',
    served: '',
    garnish: '',
    tried: '',
    image: ''

  };
};

export default {
  data() {
    return { 
      cocktail: initCocktail()
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
      this.onAdd(this.cocktail)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.cocktail = initCocktail();
        });
    }
  }
};

</script>

<style>

.form {
  position: sticky;
  top: 50px;
  border-radius: 5px;
}

#add-cocktail {
  text-align: center;
  font-size: 1.5em;
  color: whitesmoke;
  background: rgba(0, 0, 0, .70);
  padding: 10px;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  font-size: 1.5em;
  padding-left: .25em;
  border-top: none;
  margin-bottom: 10px;
}

select {
  font-size: 1.5em;
  margin-bottom: 10px;
}

button {
  font-size: 1.5em;
  padding: 8px;
  color: white;
  background: rgba(0, 0, 0, .80);
  border: none;
  border-radius: 5px;
}

</style>
