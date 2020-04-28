<template functional>
    <router-link class="ickt-product" :to="'/detail/' + props.data._id" tag="div">
        <img :src="props.data.img" alt="">
        <div class="contnet">
            <h4 class="title">{{props.data.title}}</h4>
            <p>
                <span class="price">{{props.data.price}}元</span>
                <span class="origin-price">门市价:{{props.data.originPrice}}</span>
                <span class="sales">销量:{{props.data.sales}}</span>
            </p>
        </div>
        <p v-if="props.data.num" class="num-price">
            <span>数量 : <span class="num">{{props.data.num}}</span></span>
            <span>金额 : <span class="item-price">{{props.data.num * props.data.price}}</span></span>
        </p>
    </router-link>
</template>

<style lang="scss" scoped>
@import '@/base.scss';
.ickt-product {
    text-align: left;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    padding: 15px 12px;
    border-bottom: solid 1px #f7f7f7;
    img {
        width: 100px;
        margin-right: 12px;
    }
    .num-price {
        width: 100%;
        // background-color: red;
        height: 30px;
        position: relative;
        top: 10px;
        font-size: 13px;
        color: #666;
        line-height: 30px;
        .num, .item-price {
            color: $c;
            margin-left: 5px;
        }
        span {
            float: right;
            margin-left: 20px;
        }
    }
    .contnet {
        padding-bottom: 5px;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .title {
            width: 100%;
            font-size: 15px;
            color: #333;
        }
        p {
            width: 100%;
            font-size: 12px;
            color: #999;
            .price {
                color: $c;
                margin-right: 10px;
            }
            .sales {
                float: right;
                color: #666;
            }
        }
    }
}
</style>