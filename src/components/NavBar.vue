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
        <router-link
            to="/about"
            class="ui icon item"
            :class="{ 'item__active' : $route.path === '/about'}">
            About
        </router-link>
        <div class="right menu">
            <div class="ui right aligned category search item">
                <div class="ui transparent icon input">
                    <!-- <v-select
                        id="v-select"
                        placeholder="Search..."
                        :options="coins"
                        @input="selectCoin"
                        label="name"
                    >
                        <template slot="option" slot-scope="option">
                            <img :src="`https://chasing-coins.com/api/v1/std/logo/${option.symbol}`" class="select__logo" />
                            <span class="select__name">{{option.name}}</span>
                        </template>
                    </v-select> -->
                    <i class="search link icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>
