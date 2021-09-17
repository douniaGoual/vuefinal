<template>
  <div class="container">
  <h1>Pokemon's</h1>
  <PokemonList 
  :imageUrl="image" 
  :apiUrl="apiUrl"
  @setPokemonUrl="setPokemonUrl" />    
  <PokemonDetail 
  v-if="showDetail"  
  :pokemonUrl= "PokemonUrl"   
  :imageUrl="image" 
  @closeDetail="closeDetail" />      

  </div>
</template>

<script>

import PokemonSearch from './pokemonSearch.vue';
import PokemonList from './pokemonList.vue';
import PokemonDetail from './pokemonDetail.vue';


export default {
  data: () =>{
    return {
      imageUrl : 'http://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon',
      apiUrl :' https://pokeapi.co/api/v2/pokemon/ditto',
      setPokemonUrl:'',
      ShowDetail : false
    }

    
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  methods :{
    setPokemonUrl(url) {
      this.PokemonUrl =url ;
      this.ShowDetail = true;

    }
  }
}
</script>
