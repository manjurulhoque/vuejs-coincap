import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import CoinDetails from './pages/CoinDetails.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/coin-details/:website_slug',
            name: 'coinDetails',
            component: CoinDetails,
            props: true
        },
    ]
})