<template>
    <div class="page-buy">
        <div class="price-part">
            <span>商品总价:</span>
            <strong class="price">￥{{allPrice}}</strong>
        </div>
        <div class="list-part">
            <p class="title">购买商品</p>
            <Product v-for="item in data" :key="item._id" :data="item"></Product>
            
        </div>
        <div class="btns-part">
            <span @touchend="$router.back()">取消购买</span>
            <span>立即购买</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page-buy {
    .price-part {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 12px;
        background-color: #fff;
        border-bottom: 1px solid #f7f7f7;
        span {
            font-size: 16px;
            color: #666;
        }
        strong {
            font-size: 30px;
            color: rgb(255, 20, 20);
            font-weight: normal;
            margin-left: 8px;
        }
    }
    .list-part {
        background-color: #fff;
        p {
            font-size: 14px;
            color: rgb(187, 187, 187);
            padding: 12px 12px 0 12px;
        }
    }
    .btns-part {
        border-top: 1px solid rgba(221, 221, 221, 0.8);
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        text-align: center;
        line-height: 30px;
        color: #fff;
        padding: 10px 0;
        span {
            border-radius: 4px;
            width: 40%;
            background-color: red;
            font-size: 14px;
            line-height: 40px;
            &:first-child {
                background-color: rgb(179, 179, 179);
            }
        }
    }
}
</style>

<script>
import Product from '@/components/Product';
export default {
    data() {
        return {
            data: []
        }
    },

    components: { Product },
    methods: {
        // 发送请求携带数据
        carList() {
            this.$http.post('/data/car/list')
            .then(({data}) => {
                if (data.error == 0) {
                    this.data = data.data;
                }
            })
        }
    },

    computed: {
        allPrice() {
            let arr = this.data.reduce((prev, item) => prev + (item.price * item.num), 0)
            return arr
            // return arr.reduce((a, b) => a + b)
        }
    },

    created() {
        this.carList();
    }
}
</script>

