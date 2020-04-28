<template>
    <div id="app">
        <router-view v-if="0"></router-view>
        <login v-else></login>
    </div>
</template>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html, body, #app {
    height: 100%;
    background-color: #eee;
}
</style>

<script>
import Login from '@/views/Login.vue';
export default {
    components: { Login }
}
</script>