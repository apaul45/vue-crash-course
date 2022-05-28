<script>

import {store} from '../main.js';

export default{
    name: "AnotherComponent",
    props: {
        msg: String,
    },
    data(){
        return {
            thisMessage: "Hello from the other component!",
            inputText: "",
            store
        }
    },
    //In the options API, the watch option aloows for functions to be triggered
    //when variables change
    watch: {
        inputText(newText, oldText){
            console.log("Watch function for inputText was triggered!");
            console.log("New Text: " + newText + ", Old Text: " + oldText);
        }
    },
    methods: {
        onHeightClick(){
            store.is_tall = !store.is_tall;
        }
    }
}

</script>

<template>
    <h2>{{msg}} Like the style?</h2>
    <button @click="onHeightClick"> Click on component 2's button!</button>
    <div>Type something below</div>
    <!-- v-model can be used on a input tag to automatically sync 
    input value with a certain variable in this component's (or global's) state -->
    <div>Current value of the input text is {{inputText}}</div>
    <input v-model="inputText">
</template>

<style scoped>
    h2 {
        color: blue;
    }
</style>>