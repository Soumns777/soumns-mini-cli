<template>
  <view class="container">
    <!-- Navbar:需要使用placeholder占位 -->
    <u-navbar title="Soumns" leftIconSize="40rpx " leftIconColor="#9f9f9f9" :bgColor="bgColor" placeholder="true" :border="false" fixed="true" safeAreaInsetTop="false"> </u-navbar>

    <!-- Content -->
    <button type="button" class="container-content">Test</button>

    <!-- <u-button type="primary" loading loadingText="加载中"></u-button> -->
  </view>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bgColor: '#80D1C8'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  .container-content {
    width: 400rpx;
    height: 80rpx;
    border: none;
    color: #fff;
    background-color: #002ea6;
  }
}
</style>
