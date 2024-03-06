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

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(router).use(vuetify).mount('#app')
