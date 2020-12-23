<template>
  <div class="body">
    <!-- 互动话题标题 -->
    <div class="bill_title">
      <p class="bill_title_p">{{title}}</p>
    </div>
    <!-- 话题海报 -->
    <div class="bill_imageinfo">
      <!-- 海报 -->
      <van-image class-prefix="bill_image" width="91vw" height="125vw" :src="bill_image_url" />
      <!-- more按钮 -->
      <van-image class-prefix="more_btn" width="10vw" height="10vw" :src="more_image_url" />
    </div>
    <!-- ’我要参与‘按钮 -->
    <div class="btn_join">
      <van-button round type="info" color="#DE595D">我要参与</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Image as VanImage, Badge, Icon, Button } from 'vant';

Vue.use(VanImage, Badge, Icon, Button);
export default {
  data () {
    return {
      title: '我与长亮的第几年',
      bill_image_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
      more_image_url: 'http://qlq7n1lvu.hn-bkt.clouddn.com/bill_more.png'
    };
  },
  props: {
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.body
  .bill_title
    .bill_title_p
      width: 45vw;
      height: 5vw;
      font-family: TaipeiSansTCBeta-Bold;
      font-size: 6vw;
      font-weight: normal;
      font-stretch: normal;
      line-height: 6vw;
      letter-spacing: 0vw;
      color: #e92b28;
  .bill_imageinfo
    width 93vw
    height 130vw
</style>
