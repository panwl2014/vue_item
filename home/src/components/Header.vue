<template>
    <div class="ickt-header">
        <img src="/static/home/img/icon/icon_back.png" alt="" @click="back">
        <p v-if="title">{{title}}</p>
        <div @click="login" class="login">
            <slot name="login"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/base.scss';
.ickt-header {
    font-size: 16zx;
    color: #fff;
    background-color: $c;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    img {
        width: 24px;
        height: 24px;
    }
    .login {
        font-size: 14px;
    }
}
</style>

<script>
export default {
    props: ['title', 'back', 'login']
}
</script>