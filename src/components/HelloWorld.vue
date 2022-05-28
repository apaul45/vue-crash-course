<script>

import AnotherComponent from './AnotherComponent.vue';
import {store} from '../main.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    comp_id: Number,
  },
  components: {
    AnotherComponent,
  },
  data(){
    return{
      message: "Hello",
      id: 2,
      numClicks: 0,
      store
    }
  },
  methods: {
    onClickInc(){
      this.message = "I see you clicked on me! Number of clicks: " + ++this.numClicks;
    },
    onClickDec(){
      this.message = "I see you clicked on me! Number of clicks: " + --this.numClicks;
    },
    onAgeClick(){
      store.age++;
    }
  }
}
</script>

<template>
  <h1>{{msg}} Vue! I am component #{{comp_id}}! Like my style?</h1>
  <button @click="onClickInc">{{message}}</button>
  <button @click="onClickDec">{{msg}}</button>
  <button @click="store.age++"> Press component 1's button!</button>
  <!-- 
  
  The slot tag lets the parent component add html content to
  this child component-- ie, it allows the parent to pass template 
  fragments to the child for it to render in its own template 
  
  If the parent doesn't pass any template fragment(s) (ie, <HelloWorld />, or
  <HelloWorld> </HelloWorld>), then fallback content can be included between the 
  slot tag. This content will only get rendered if the parent doesn't provide content.
  
  -->
  <slot>This was rendered by me, one of the child components!</slot>
  <AnotherComponent msg="Hello from the other component!"/>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
