<template>
    <div class="home">
        <!-- <div v-if="loading" class="ui active large loader"></div> -->
        <rotate-square5 v-if="loading" style="width: 50%; margin: 0 auto"></rotate-square5>
        <div v-if="!loading" class="ui grid">
            <div class="sixteen wide column coin-market">
                <div class="ui three column grid">
                    <div class="column">
                        <div class="ui segment banner">
                        Total Market Cap: {{ data.quotes.USD.total_market_cap | toCurrency}}
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui segment banner">
                        Total Volume (24hr): {{ data.quotes.USD.total_volume_24h | toCurrency}}
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui segment banner">
                        Total BTC Dominance: {{ data.bitcoin_percentage_of_market_cap }} %
                        </div>
                    </div>
                </div>

                <div class="sixteen wide column">
                    <div class="ui segment header desktop">
                        <div class="ui grid">
                            <div class="one wide column">#</div>
                            <div class="two wide column">Name</div>
                            <div class="one wide column">Symbol</div>
                            <div class="three wide column">Market Cap</div>
                            <div class="two wide column">Price</div>
                            <div class="three wide column">Circulating Supply</div>
                            <div class="two wide column">1h</div>
                            <div class="two wide column">24h</div>
                        </div>
                    </div>
                </div>
                <coin-item v-for="coin in coins" :key="coin.id" :coin="coin"></coin-item>
            </div>
        </div>
    </div>
</template>

<script>
import CoinItem from '../components/CoinItem';
import {RotateSquare5} from 'vue-loading-spinner'
import axios from 'axios';
export default {
    data() {
        return {
            loading: true,
            coins: [],
            data: {}
        }
    },
    mounted() {
        this.getGlobal();
        this.getCoins();
    },
    methods: {
        getCoins() {
            axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=100')
                .then(res => {
                    this.coins = res.data.data;
                    this.loading = false;
                });
        },
        getGlobal() {
            axios.get('https://api.coinmarketcap.com/v2/global/')
                .then(res => this.data = res.data.data);
        }
    },
    components: {
        CoinItem,
        RotateSquare5
    }
}
</script>
