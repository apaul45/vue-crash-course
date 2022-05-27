<script>

import {store} from '../main.js';

export default{
    name: "AnotherComponent",
    props: {
        msg: String
    },
    data(){
        return {
            thisMessage: "Hello from the other component!",
            store
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
</template>

<style scoped>
    h2 {
        color: blue;
    }
</style>>