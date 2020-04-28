<template>
    <div class="ickt-search">
        <input type="text" placeholder="请输入搜索的内容" v-model="msg" @keydown.enter="showList">
    </div>
</template>

<style lang="scss" scoped>
.ickt-search {
    padding: 8px;
    background-color: #fff;
    input {
        padding: 0 15px;
        height: 30px;
        border-radius: 15px;
        border: none;
        background-color: #eeeeee;
        font-size: 12px;
        width: 100%;
        outline: none;
    }
}
</style>

<script>
export default {
    // props: ['search'],
    data() {
        return {
            msg: ''
        }
    },

    methods: {
        showList() {
            this.$store.commit('search', this.msg);
        }
    }
}
</script>