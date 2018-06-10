<template>
  <div class="form">

    <form @submit.prevent="handleSubmit">
      <h2><b>{{ header.toUpperCase() }}</b></h2>
      <input type="text" placeholder="Name" required v-model="edit.name">
      <select v-model.number="edit.alcoholID">
        <option disabled value="">Main Liquor</option>
        <option
          v-for="alcohol in alcohols"
          :key="alcohol.id"
          :value="alcohol.id">
          {{alcohol.alcohol.charAt(0).toUpperCase(0) + alcohol.alcohol.slice(1)}}
        </option>
      </select>

      <input type="text" placeholder="Ingredients" required v-model="edit.ingredients">
      <input type="text" placeholder="Served" v-model="edit.served">
      <input type="text" placeholder="Garnish" v-model="edit.garnish">
      <input type="text" placeholder="Enter image url" v-model="edit.image">
      
      <label>Tried:
      <input type="radio" value="true" v-model="edit.tried"> Yes
      <input type="radio" value="false" v-model="edit.tried"> No
      </label>
      
      <button type="submit">{{ label }}</button>
    </form>

  </div>
</template>

<script>

import { getAlcohols } from '../services/api';

const initCocktail = () => {
  return {
    name: '',
    alcoholID: '',
    ingredients: '',
    served: '',
    garnish: '',
    tried: false,
    image: ''

  };
};

export default {
  data() {
    return { 
      edit: this.cocktail ? Object.assign({}, this.cocktail) : initCocktail(),
      alcohols: []
    };
  },

  created() {
    getAlcohols().then(alcohols => {
      this.alcohols = alcohols;
    });
  },

  props: {
    onEdit: {
      type: Function,
      required: true
    },
    cocktail: Object,
    label: String,
    header: String
  },

  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        .then(() => {
          this.edit = initCocktail();
        });
    }
  }
};

</script>

<style scoped>

h2 {
  color: mediumpurple;
  font-size: 25px;
  margin-top: 0px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  font-size: 25px;
  padding-left: 10px;
  margin-bottom: 10px;
}

select {
  font-size: 25px;
  margin-bottom: 10px;
}

label {
  font-size: 25px;
  color: white;
}

button {
  font-size: 25px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-color: firebrick;
  background: firebrick;
}
</style>
