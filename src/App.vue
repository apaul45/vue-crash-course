<script>
//Can include child components by importing them into the parent comp
import HelloWorld from './components/HelloWorld.vue';
import {store} from './main.js';


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      store
    }
  },
  methods: {
    propsCallback(){
       console.log("HHHHH");
    }
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h1>Welcome to Vue!</h1>
    <p>
      This app's state consists of the name {{store.name}}, with an age of 
      {{store.age}}, and who is <span v-if="store.is_tall"> tall </span> 
      <span v-else>short.</span>
    </p>
  </div>
  <HelloWorld msg="Hello" comp_id="1"/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
