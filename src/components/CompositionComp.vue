<script>
import {ref} from 'vue';

// The Composition API allows for defining the data, methods, 
// etc options in one place (setup(), which is called around 
// the same time as created()), and using things like refs and hooks
export default({
    setup() {
       //Could replace the data option with the use of ref 
       const value = ref(0); //ref is like useState in React: it creates a reactive variable that Vue knows about
       const message = ref("Default message"); //ref is a wrapper function, so .value must be used to read or write to the variable 

       //Can define functions normally inside setup()
       const changeValue = () => {
           value.value++;
           if (value.value % 2 == 0) changeMessage("Value is even!");
           else changeMessage("Value is odd!");
       }
       function changeMessage(e){
           message.value = e;
       }

       //These variables and functions must be returned by setup() in order 
       //to be accessible to the template
       return {
           value, 
           message,
           changeValue,
           changeMessage
       };
    },
});
</script>

<template>
    <h4>Hi! This is a component made using the Composition API!</h4>
    <button @click="changeValue">Value: {{value}}</button>
    <h6>Feel Free to change the Message Below!</h6>
    <input v-model="message">
    <span>Message: {{message}}</span>
</template>

<style scoped>

</style>