<template>
  <div class="page-detail" v-if="showPage">
    <!-- 图片 -->
    <div class="image-part">
      <img :src="data.img" alt style="height: 100, width: 100" />
      <p class="title-img">{{data.title}}</p>
      <p class="description">{{data.description}}</p>
      <div class="mask"></div>
    </div>
    <!-- <div class="price-part">
      <span class="price">{{data.price}}元</span>
      <span class="origin-price">门市价{{data.originPrice}}</span>
      <p class="num-part">
        <span class="reduce">-</span>
        <span class="num">{{productList.num}}</span>
        <span class="add">+</span>
      </p>
      <span class="buy">立即购买</span>
    </div>-->
    <div class="sales-part">
      <p>
        <span>支持立即退货</span>
        <span>支持随时退货</span>
      </p>
      <p class="sales">销量:{{data.sales}}</p>
    </div>
    <div class="store-part">
      <p class="title">店家信息</p>
      <p class="store-name">{{data.storeName}}</p>
      <p class="store-address">{{data.storeAddress}}</p>
      <div class="store-Num">查看其他{{data.storeNum}}家分店</div>
    </div>
    <div class="need-know">
      <p class="title">购买须知</p>
      <div class="module" v-html="data.content"></div>
    </div>
    <shopping-bar :data="data" :add="add" :reduce="reduce" :addItem="addItem" :addCar="addCar"></shopping-bar>
  </div>
</template>

<style lang="scss">
@import "@/base.scss";

.page-detail {
  background-color: #f7f7f7;
  height: 100%;
  font-size: 14px;
  .image-part {
    position: relative;
    color: #fff;
    img {
      width: 100%;
    }
    .title-img {
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      bottom: 40px;
      left: 12px;
      z-index: 2;
    }
    .description {
      font-size: 14px;
      position: absolute;
      bottom: 15px;
      left: 12px;
      z-index: 2;
    }
    .mask {
      position: absolute;
      bottom: 3px;
      right: 0;
      width: 100%;
      height: 30%;
      background-image: repeating-linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.384)
      );
    }
  }

  //   .price-part {
  //     background-color: #fff;
  //     position: relative;
  //     padding: 0 12px;
  //     display: flex;
  //     height: 44px;
  //     border-bottom: 1px solid #f7f7f7;
  //     align-items: center;
  //     .price {
  //       font-size: 18px;
  //       color: $c;
  //     }
  //     .num-part {
  //         font-weight: bold;
  //         margin-left: 40px;
  //         .num {
  //             color: red;
  //             padding: 0 10px;
  //         }
  //         .reduce, .add {
  //             text-align: center;
  //             line-height: 24px;
  //             display: inline-block;
  //             background-color: #e2e2e2;
  //             border-radius: 3px;
  //             height: 24px;
  //             width: 24px;
  //         }
  //     }
  //     .origin-price {
  //       color: #333;
  //       margin-left: 12px;
  //     }
  //     .buy {
  //       padding: 5px 10px;
  //       background-color: rgb(255, 68, 10);
  //       border-radius: 3px;
  //       color: #fff;
  //       justify-self: flex-end;
  //       position: absolute;
  //       right: 12px;
  //       font-size: 13px;
  //       &.has-buy {
  //         color: #666;
  //         background-color: #ddd;
  //       }
  //     }
  //   }

  .sales-part {
    margin-bottom: 12px;
    padding: 10px 12px;
    background-color: #fff;
    p {
      span {
        display: inline-block;
        width: 50%;
        color: $c;
        font-size: 13px;
        margin-bottom: 8px;
      }
    }
    .sales {
      color: #666;
    }
  }

  div {
    .title {
      height: 44px;
      background-color: #fff;
      padding: 0 12px;
      display: flex;
      align-items: center;
      color: #333;
      font-size: 16px;
      border-bottom: 1px solid #f7f7f7;
    }
  }

  .store-part {
    background-color: #fff;
    p,
    div {
      background-color: #fff;
      padding: 0 12px;
    }
    .store-name,
    .store-address {
      margin: 10px 0;
      color: #666;
    }
    .store-Num {
      padding: 12px;
      margin-bottom: 12px;
      border-top: 1px solid #f7f7f7;
      margin-top: 12px;
      color: $c;
    }
  }

  .need-know {
    background-color: #fff;
    .module {
      padding: 12px;
      p {
        color: #666;
        padding-bottom: 8px;
        line-height: 1.7;
      }
      h3 {
        font-size: 15px;
        padding-bottom: 0px;
        color: rgb(255, 68, 10);
        font-weight: normal;
      }
    }
  }
}
</style>
<script>
import shoppingBar from "@/components/shoppingBar.vue";
export default {
  components: { shoppingBar },
  data() {
    return {
      data: {},
      showPage: false
    };
  },

  methods: {
    // 增加数量
    reduce() {
      this.data.num > 1 ? this.data.num-- : 1;
      this.addCar();
    },

    // 减少数量
    add() {
      this.data.num++;
      this.addCar();
    },

    addItem() {
      if (this.data.isBuy) {
        this.removeItem()
        return
      }
      this.addCar();
    },

    // 获取商品信息 检测是否存在购物车
    getData() {
      let { params } = this.$route;
      this.$http.get("/data/detail", { params }).then(({ data }) => {
        if (data.error == 0) {
          this.data = data.data;
        }
      });

      this.$http
        .post("/data/detail/check", { id: this.$route.params.id })
        .then(({ data }) => {
          if (data.error == 0) {
            this.$set(this.data, "num", data.num);
            this.$set(this.data, "isBuy", true);
          } else {
            this.$set(this.data, "num", 1);
            this.$set(this.data, "isBuy", false);
          }
          console.log(111, this.data.isBuy);
          this.showPage = true;
        });
    },
      // 移除购物车
    removeItem() {
        this.$http
          .post("/data/detail/remove", { id: this.$route.params.id })
          .then(({ data }) => {
            console.log(data);
            if (data.error == 0) {
              this.$set(this.data, "isBuy", false);
            }
          });
    },

    // 添加购物车
    addCar() {
      this.$http
        .post("/data/detail/addcar", { data: this.data })
        .then(({ data }) => {
          if (data.error == 0) {
            this.$set(this.data, "isBuy", true);
            console.log(data.msg);
          }
        });
    }
  },

  created() {
    this.getData();
  },

  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>

