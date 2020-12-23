<template>
  <div class="body">
    <div class="main">
      <div class="message_person_info">
        <van-image width="5vw" height="4vw" :src="image_crown_url" />
        <span class="name">{{name}}</span>
        <span class="legal_personality">{{legal_person_info}}</span>
      </div>
      <div class="message_time">
        <span class="time">{{time}}</span>
      </div>
      <div class="message_content">
        <span class="content_p">{{content}}</span>
      </div>
      <div class="message_addition">
        <van-image width="17vw" height="17vw" :src="image_url" @click="ShowBigImage(image_url)"/>
      </div>
      <div class="message_like">
        <van-image width="3vw" height="3vw" :src="image_like_url" />
        <span class="like_count_text">{{like_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row, Image as VanImage, ImagePreview } from 'vant';

Vue.use(Col, Row, VanImage, ImagePreview);

export default {
  data () {
    return {
      name: '王冶',
      time: '2020-12-20',
      content: '此处是内容话题,没错，我是话题内容，话题话题话题话题话题话题话题话题话题话题，话题话题话题话题话题话',
      image_crown_url: 'http://qlq7n1lvu.hn-bkt.clouddn.com/crown.png',
      image_like_url: 'http://qlq7n1lvu.hn-bkt.clouddn.com/like.png',
      image_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
      legal_person_info: '杭州长亮',
      like_count: '999'
    };
  },
  props: {
  },
  created () {
  },
  computed: {
  },
  methods: {
    ShowBigImage (url) {
      ImagePreview([url]);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.body
  height 49vw
  .main
    width 91vw
    height 46vw
    margin 3vw auto
    border-bottom 1px solid #cecece
    .message_person_info
      .name
        width: 8vw;
        height: 3vw;
        font-family: HiraginoSansGB-W3;
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4vw;
        letter-spacing: 0vw;
        color: #a76c5c;
      .legal_personality
        float right
        width: 13vw;
        height: 3vw;
        font-family: HiraginoSansGB-W3;
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4vw;
        letter-spacing: 0vw;
        color: #999999;
    .message_time
      .time
        width: 17vw;
        height: 2vw;
        font-family: HiraginoSansGB-W3;
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4vw;
        letter-spacing: 0vw;
        color: #999999;
    .message_content
      .content_p
        width: 91vw;
        height: 7vw;
        font-family: HiraginoSansGB-W3;
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 5vw;
        letter-spacing: 0vw;
        color: #000000;
    .message_addition
    .message_like
      .like_count_text
        width: 5vw;
        height: 2vw;
        font-family: HiraginoSansGB-W3;
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4vw;
        letter-spacing: 0vw;
        color: #999999;
</style>
