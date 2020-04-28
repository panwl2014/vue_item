<template>
  <div class="price-part">
    <span class="price">{{data.price*data.num || data.price}}元</span>
    <p class="num-part">
      <span class="reduce" @touchend="reduce">-</span>
      <span class="num">{{data.num}}</span>
      <span class="add" @touchend="add">+</span>
    </p>
    <router-link tag="div" class="car" to="/buy">购物车</router-link>
    <div :class="{'buy': true, 'isBuy':data.isBuy}" @touchend="addItem">{{ data.isBuy ? '取消加入': '加入购物车'}}</div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/base.scss";
.price-part {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #eee;
  background-color: rgb(255, 255, 255);
  padding: 0 12px;
  display: flex;
  height: 52px;
  align-items: center;
  .price {
    font-size: 18px;
    color: $c;
  }
  .num-part {
    position: absolute;
    right: 55%;
    font-weight: bold;
    margin-left: 40px;
    .num {
      color: red;
      padding: 0 10px;
    }
    .reduce,
    .add {
      text-align: center;
      line-height: 24px;
      display: inline-block;
      background-color: #e2e2e2;
      border-radius: 3px;
      height: 24px;
      width: 24px;
    }
  }
  .origin-price {
    color: #333;
    margin-left: 12px;
  }
  
  div {
    width: 20%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: rgb(255, 68, 10);
    color: #fff;
    justify-self: flex-end;
    font-size: 12px;
    &.car {
      background-color: orange;
      border-radius: 18px 0 0 18px;
      position: absolute;
      right: 20%;
      margin-right: 15px;
    }
    &.buy {
      margin-right: 15px;
      position: absolute;
      right: 0px;
      border-radius: 0 18px 18px 0;
    }
    &.isBuy {
      color: #fff;
      background-color: rgba(255, 67, 10, 0.548);
    }
  }
}
</style>

<script>
export default {
  props: ["data", 'addCar', 'reduce', 'add', 'addItem'],
  beforeCreate() {
    this.$http.post('/data/detail/check', {id: this.$route.params.id})
    .then(({data}) => {
      if (data.error == 0) {
        this.$set(this.data, 'num', data.num)
        this.$set(this.data, 'isBuy', true)
      } else {
        this.$set(this.data, 'num', 1)
        this.$set(this.data, 'isBuy', false)
      }
      console.log(111, this.data.isBuy);
    })
  }
};
</script>