<template>
  <div class="topic-template">
    <div class="message-wrapper">
      <div class="message-top">
        <div class="name">
          <span>被推荐人姓名</span>
        </div>
        <div class="modify">
          <span v-if="isMyself">被推荐人编号：111</span>
        </div>
      </div>
      <div class="person-info">
        <span class="age">年龄：25</span>
        <span class="sex">性别：女</span>
      </div>
      <div class="message-content">
        <span>择偶标准一句话在这里，择偶标准在这里.择偶标准一句话在这里，择偶标准在这里.</span>
      </div>
      <div class="message-more">
        <div class="message-image">
          <!-- <img :src="ok"> -->
          <div class="message-image-span"></div>
        </div>
        <div class="message-bottom">
          <span class="bottom-name">王冶1</span>
          <span class="bottom-legal">杭州长亮</span>
          <span class="bottom-date">03-12-2020 21:07</span>
        </div>
      </div>
    </div>
    <div class="interactive-wrapper">
      <span>点赞</span>
      <span v-if="isMyself">分享</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMyself: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
.topic-template
  .message-wrapper
    .message-top
      display flex
      .name
        flex 2
        text-align left
        padding-left 5vw
        font-size 3vw
        color #a76c5c
      .modify
        flex 1
        text-align right
        padding-right 5vw
        font-size 3vw
        color #999999
    .person-info
      padding-top 2vw
      .age
        padding-left 5vw
        font-size: 3vw;
        color: #999999;
      .sex
        padding-left 7vw
        font-size: 3vw;
        color: #999999;
    .message-content
      padding-top 2vw
      padding-left 5vw
      line-height 5vw
      font-size: 3vw;
      color: #000000;
    .message-more
      display flex
      padding-left 5vw
      padding-top 2vw
      padding-right 4vw
      .message-image
        flex 1
        .message-image-span
          width 17vw
          height 17vw
          border 1px solid #000
      .message-bottom
        display flex
        flex-direction column
        justify-content center
        text-align right
        font-size: 3vw;
        color: #999999;
        .bottom-name
        .bottom-legal
          padding-top 2vw
        .bottom-date
          padding-top 2vw
  .interactive-wrapper
    padding-top 2vw
    text-align left
    padding-left 5vw
    font-size 3vw
    color #999999
</style>
