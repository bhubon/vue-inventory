import { createRouter, createWebHistory } from "vue-router";

// lazy routing
import Dashboard from '../views/Dashboard.vue';
import MainPageComponent from '../components/MainPageComponent.vue';


const routes = defineRoutes([
    {
        path: '/',
        name: 'app',
        // lazy routing
        components: {
            default: (): promise() => import('../components/MainPageComponent.vue')
        }
    }
]);