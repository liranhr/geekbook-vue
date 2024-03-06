const OpenedApp = () => import ("../components/WelcomeApp/WelcomeApp.vue");

const routes = [
    {
        path: '/',
        name: 'Opened App',
        component: OpenedApp
    }
]

export default routes;