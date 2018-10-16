<template>
    <div id="app">
        <div id="nav">
            <nav-bar></nav-bar>
        </div>
        <router-view />
    </div>
</template>

<script>
import NavBar from './components/NavBar';
export default {
    components: {
        NavBar
    }
}
</script>

<style src="./assets/css/app.css">

</style>

