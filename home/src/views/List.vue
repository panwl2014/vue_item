<template>
    <div class="list-page">
        <search></search>
        <div class="orders">
            <li v-for="item in orders" :key="item.id" @touchend="orderProduct(item.id)">{{item.text}}</li>
        </div>
        <product v-for="item in list" :key="item._id" :data="item"></product>
        <div class="look-more">
            <p @touchend="lookMore" v-if="other.length">查看其他 {{other.length}} 条商品</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/base.scss';
.list-page {
    .orders {
        border-bottom: 1px solid #f7f7f7;
        font-size: 12px;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        color: #666;
        line-height: 40px;
        li {
            &::before {
                margin-right: 4px;
                box-sizing: border-box;
                display: inline-block;
                content: '';
                width: 4px;
                height: 4px;
                position: relative;
                top: 2px;
                border: solid 4px transparent;
                border-top: 4px solid #666;
            }
        }
    }
    .look-more {
        p {
            text-align: center;
            font-size: 12px;
            color: $c;
            background-color: #fff;
            line-height: 50px;
        }
    }
}
</style>
<script>
import Search from '@/components/Search'
import Product from '@/components/Product'
export default {
    components: { Search, Product},
    data() {
        return {
            orders: [
                { text: "价格排序", id: "price" },
                { text: "销量排序", id: "sales" },
                { text: "好评排序", id: "evaluate" },
                { text: "优惠排序", id: "discount" }
            ],
            list: [],
            other: [],
        }
    },

    methods: {
        lookMore() {
            this.list = this.list.concat(this.other);
            console.log(this.list)
            this.other = [];
        },

        getData() {
            let {params} = this.$route;
            this.$http.get('/data/list', { params })
            .then(({data}) => {
                if (data.error == 0) {
                    this.list = data.data.slice(0, 3);
                    this.other = data.data.slice(3);
                }
            })
        },

        orderProduct(id) {
            this.$http.get('/data/list/order', {
                params: {
                    type: this.$route.params.id,
                    id,
                    mode: 1
                }
            })
            .then(({data}) => {
                if (data.error == 0) {
                    this.list = data.data.slice(0, 3);
                    this.other = data.data.slice(3);
                }
            })
        }
    },
    
    computed: {
        watchSearch() {
            return this.$store.state.search;
        }
    },

    created() {
        this.getData()
    },

    watch: {
        $route() {
            this.getData();
        },

        watchSearch(val) {
            this.$http.get('/data/search', {
                params: {
                    type: this.$route.params.id,
                    val
                }
            })
            .then(({data}) => {
                if(data.error == 0) {
                    this.list = data.data;
                    this.other = []
                }
            })
        }
    }
}
</script>