//Entry point of the Vue application:
//Could have also done const app = Vue.createapp(), followed by app.mount(#app)
import { createApp } from 'vue'
import App from './App.vue';
//For a simple shared state among components, can use the reactivity API
import {reactive} from 'vue';

export const store = reactive({
    name: "John Doe",
    age: 12,
    is_tall: false
  });

createApp(App).mount('#app')
