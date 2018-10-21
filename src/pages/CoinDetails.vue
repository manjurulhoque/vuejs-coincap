<template>
    <div class="ui grid dashboard" v-if="coin">
        <div class="sixteen wide column" style="margin-top: 40px">
            <img :src="`https://chasing-coins.com/api/v1/std/logo/${coin.symbol}`"/>
            <h1 class="ui header">{{coin.name}} <span>{{coin.symbol}}</span></h1>
            <a class="ui orange label">Rank {{coin.rank}}</a>
            <p class="dashboard__trading">Currently trading at
                <span class="segment__primary">{{coin.quotes.price | toCurrency}}</span>
            </p>
            <p class="dashboard__market-cap">with a Market Cap of
                <span class="segment__primary">{{coin.quotes.market_cap | toCurrency}}</span>
            </p>
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="header">Volume (24hr)</div>
                        <div class="meta">Volume that has been traded in the last 24hrs</div>
                        <div class="description">
                        {{ coin.quotes.USD.volume_24h | toCurrency }}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">1hr Change</div>
                        <div class="meta">Price change in the last hour</div>
                        <div class="description"
                            :class="[isValuePositive(coin.quotes.USD.percent_change_1h)
                            ? 'segment__positive'
                            : 'segment__negative']">
                        {{coin.quotes.USD.percent_change_1h}} %
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">24hr Change</div>
                        <div class="meta">Price change in the last 24 hrs</div>
                        <div class="description"
                            :class="[isValuePositive(coin.quotes.USD.percent_change_24h)
                            ? 'segment__positive'
                            : 'segment__negative']">
                        {{coin.quotes.USD.percent_change_24h}} %
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="header">7 day Change</div>
                        <div class="meta">Price change in the last 7 days</div>
                        <div class="description"
                            :class="[isValuePositive(coin.quotes.USD.percent_change_7d)
                            ? 'segment__positive'
                            : 'segment__negative']">
                        {{coin.quotes.USD.percent_change_7d}} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['coin'],
    methods: {
        isValuePositive(number) {
            return number > 0;
        }
    }
}
</script>
