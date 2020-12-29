<template>
  <div class="content">
    <img class="person-icon" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <div class="person-info">
      <span class="name">{{ obj.name }}</span>
      <span class="age">{{ obj.age }}岁</span>
      <van-divider
        :style="{ color: '#cecece', borderColor: '#cecece', padding: '0 7vw' }"
      />
      <span class="spouse_criterion">{{ obj.spouse_criterion }}</span>
      <span class="introduce">{{ obj.introduce }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      'url-1': 'https://img.yzcdn.cn/vant/cat.jpeg',
      obj: {
        name: '狗狗',
        age: '18',
        spouse_criterion: '择偶标准是个人就行是个人就行是个人就行，达可不必',
        introduce: '一个人一个人一个人一个人一个人一个人一个人一个人一个人一个人一个人一个人'
      }
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
.content
  height 131vw
  width 100%
  display flex
  flex-direction row
  justify-content center
  .person-icon
    position absolute
    height 23vw
    width 23vw
    border-radius:50%
  .person-info
    display flex
    flex-direction column
    height 122vw
    width 80vw
    margin-top 9vw
    background-color #ffffff
    border-radius 2vw
    border solid 0.5vw #ffd69e
    background-image url("个人信息_07@2x.png")
    background-size 100% 30vw
    background-repeat repeat-x
    background-repeat-y no-repeat
    background-position 0vw 94vw
    .name
      padding-top 20vw
      height 4vw
      text-align center
      font-size 4vw
      line-height 1vw
      letter-spacing 0vw
      color #000000
    .age
      padding-top 3vw
      height 3vw
      text-align center
      font-size 3vw
      line-height 1vw
      letter-spacing 0vw
      color #666666
    .spouse_criterion
      padding 0 13vw
      text-align center
      font-size 3vw
      line-height 6vw
      letter-spacing 0vw
      color #000000
    .introduce
      padding 0 8vw
      padding-top 5vw
      text-align center
      font-size 3vw
      line-height 6vw
      letter-spacing 0vw
      color #999999
</style>
