<template>
    <div class="ui segment coin desktop">
        <a @click="gotoDetails" class="ui grid">
            <div class="one wide column segment__bold">{{ coin.rank }}</div>
            <div class="two wide column segment__primary">
                <img :src="`https://chasing-coins.com/api/v1/std/logo/${coin.symbol}`" class="segment__crypto-logo">
                {{ coin.name }}
            </div>
            <div class="one wide column segment__bold">{{ coin.symbol }}</div>
            <div class="three wide column segment__bold">{{ coin.quotes.USD.market_cap | toCurrency }}</div>
            <div class="two wide column segment__primary">{{ coin.quotes.USD.price | toCurrency }}</div>
            <div class="three wide column segment__primary">{{ coin.circulating_supply | toNumber }} {{ coin.symbol }}</div>
            <div class="two wide column"
           :class="[isValuePositive(coin.quotes.USD.percent_change_1h) ? 'segment__positive' : 'segment__negative']">
                {{coin.quotes.USD.percent_change_1h}}
            </div>
            <div class="two wide column"
                :class="[isValuePositive(coin.quotes.USD.percent_change_1h) ? 'segment__positive' : 'segment__negative']">
                {{coin.quotes.USD.percent_change_24h}}
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['coin'],
    methods: {
        isValuePositive(number) {
            return number > 0;
        },
        gotoDetails() {
            //console.log(this.coin);
            this.$router.push({ name: 'coinDetails', params: {coin: this.coin, website_slug: this.coin.website_slug }})
        }
    }
}
</script>
