<template>
    <div class="ui top attached menu">
        <router-link to="/" class="item name">
            CoinCap App
        </router-link>
        <router-link
            to="/"
            class="ui icon item"
            :class="{'item__active' : $route.path === '/'}">
            Home
        </router-link>
    </div>
</template>
