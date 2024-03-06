import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes/routes';

// Configure Router
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
    base: '/', 
    linkActiveClass: 'active'
})

createApp(App).use(router).mount('#app')
