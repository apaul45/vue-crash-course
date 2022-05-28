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
  <!-- A parent component can pass down template fragment(s) to its child
  through treating it like a html tag-- ie, including content between 
  a open and closed tag. The child can then render this fragment through 
  including the <slot> </slot> tag in their template -->
  <HelloWorld msg="Hi" comp_id="1">
    This was rendered for me by my parent component!
  </HelloWorld>
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
