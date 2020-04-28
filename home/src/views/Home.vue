<template>
  <div class="page-home">
    <!-- 分类入口 -->
    <div class="types">
      <router-link tag="li" :to="'/list/' + item.id" v-for="item in types" :key="item.id">
        <img :src="'/static/home/img/icon/' + item.img" alt />
        <p>{{item.name}}</p>
      </router-link>
    </div>
    <!-- 广告模块 -->
    <div class="ads">
      <router-link tag="li" v-for="item in ads" :key="item._id" :to="'/detail/' + item._id">
        <strong :class="'color-' + item._id">{{item.title}}</strong>
        <p>{{item.description}}</p>
        <img :src="item.url" alt />
      </router-link>
    </div>
    <div class="may-like">
        <h3>猜你喜欢</h3>
        <product v-for="(item, index) in list" :key="index" :data="item"></product>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  height: 100%;
  text-align: center;
  .types {
    margin-bottom: 10px;
    padding-top: 15px;
    font-size: 14px;
    color: #999;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      img {
        width: 65%;
      }
      p {
        margin: 5px 0 15px 0;
      }
    }
  }

  .ads {
      margin-bottom: 10px;
    display: flex;
    background-color: #fff;
    li {
      flex: 1;
      &:not(:last-child) {
        border-right: 1px solid #f7f7f7;
      }
      img {
        width: 70%;
        margin-bottom: 10px;
      }
      strong {
        font-weight: normal;
        line-height: 50px;
        font-size: 16px;
      }
      p {
        margin-bottom: 10px;
        color: #999;
        font-size: 14px;
      }
      $i: 0;
      @each $item in #fff, red, green, purple {
          .color-#{$i} {
              color: $item;
          }
          $i: $i + 1;
      }
    }
  }

  .may-like {
      background-color: #fff;
      h3 {
          // font-weight: normal;
          padding: 0 10px;
          font-size: 20px;
          color: #333;
          border-bottom: 1px solid #f7f7f7;
          line-height: 50px;
          text-align: left;
      }
  }
}
</style>

<script>
import Product from '@/components/Product'
export default {
    components: { Product },
  data() {
    return {
      types: [
        { id: "1", name: "美食", img: "01.png" },
        { id: "2", name: "电影", img: "02.png" },
        { id: "3", name: "酒店", img: "03.png" },
        { id: "4", name: "休闲", img: "04.png" },
        { id: "5", name: "外卖", img: "05.png" },
        { id: "6", name: "KTV", img: "06.png" },
        { id: "7", name: "丽人", img: "07.png" },
        { id: "8", name: "周边游", img: "08.png" },
        { id: "9", name: "小吃", img: "09.png" },
        { id: "10", name: "火车票", img: "10.png" }
      ],
      ads: [],
      list: [],
    };
  },

  methods: {
    getAds() {
      this.$http.get("/data/ads").then(({ data }) => {
        console.log(data);
        this.ads = data.data[0].ad;
      });
    },

    getList() {
      this.$http.get("/data/list").then(({ data }) => {
        console.log(data);
        this.list = data.data;
      });
    },
  },

  created() {
    this.getAds();
    this.getList();
  }
};
</script>
