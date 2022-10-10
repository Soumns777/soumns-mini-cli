<template>
  <view class="container">
    <!-- @/assets/uploads/bg_home.png -->
    <!-- @/static/images/home.png -->
    <image class="container-top-bg" src="@/static/uploads/bg_home.png" mode="widthFix" lazy-load="false" binderror="" bindload=""> </image>

    <!-- Navbar:需要使用placeholder占位 -->
    <!-- placeholder="true" -->
    <!-- :bgColor="bgColor" -->
    <!-- :fixed="true" -->
    <!-- <u-navbar title="Soumns" leftIconSize="40rpx " leftIconColor="#9f9f9f9" :border="false" safeAreaInsetTop="false"> </u-navbar> -->

    <!-- Background -->

    <!-- Content -->
    <!-- <button type="button" class="container-content">Test</button> -->

    <!-- <u-button type="primary" loading loadingText="加载中"></u-button> -->
  </view>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bgColor: '#434761'
    }
  },
  onLoad() {
    console.log(uni.getStorageSync('menuInfo'), '💙💛 胶囊信息')
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  .container-top-bg {
    width: 100%;
    height: 658rpx;
    // background-image: url('@/assets/uploads/bg_home.png');

    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // background-position: center;
  }
  .container-content {
    width: 400rpx;
    height: 80rpx;
    border: none;
    color: #fff;
    background-color: #002ea6;
  }
}
</style>
