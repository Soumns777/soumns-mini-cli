<template>
  <view class="page_box">
    <!-- 行内式直接变量小程序不支持，故需要写成动态的变量 -->
    <view class="my_tab_title" :style="{ paddingTop: statusBarHeight }">
      自定义
      <!-- 左侧自定义胶囊 -->
      <!--  border: '1rpx solid #ddd', borderRadius: menuBorderRadius -->
      <view class="menu_btn" :style="{ position: 'fixed', top: menuTop, left: menuRight, width: menuWidth, height: menuHeight, border: '1rpx solid #ddd', borderRadius: menuBorderRadius }">
        <u-icon name="photo" class="arrowleft" color="#2979ff" size="28"></u-icon>
        <text class="text_box"></text>
        <!-- <uni-icons @click="goToHome" class="home" type="home" :color="'#000'" size="20" /> -->
        <!-- <uni-icons @click="goToBack" class="arrowleft" type="arrowleft" :color="'#000'" size="22" /> -->
      </view>
    </view>

    <!-- 内容区↓ ↓ ↓ ↓ ↓ ↓ -->
    <view class="content_box" :style="{ marginTop: contentTop }">
      页面的正常内容书写区

      <view class="" :style="{ width: '300px', margin: '60px' }" hover-class="none" hover-stop-propagation="false">
        <u-button type="primary" text="确定"></u-button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight, //状态栏的高度（可以设置为顶部导航条的padding-top）
      menuWidth: uni.getStorageSync('menuInfo').menuWidth,
      menuHeight: uni.getStorageSync('menuInfo').menuHeight,
      menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
      menuRight: uni.getStorageSync('menuInfo').menuRight,
      menuTop: uni.getStorageSync('menuInfo').menuTop,
      contentTop: uni.getStorageSync('menuInfo').contentTop
    }
  },
  methods: {
    goToBack() {
      const pages = getCurrentPages()
      console.log(pages.length, '💙💛 go back')
      //   uni.navigateBack({
      //     delta: 1
      //   })
      uni.navigateBack(1)
    },
    goToHome() {
      console.log('💙💛 go to home')
      uni.switchTab({
        url: '/pages/home/index'
      })
    }
  }
}
</script>

<style lang="scss" scope>
.page_box {
  .my_tab_title {
    width: 100%;
    // height: 64px; //这个是固定的44px（所有小程序顶部高度都是 = 44px + 手机系统状态栏高度）
    line-height: 44px;
    text-align: center;
    background-color: #f8f8f8;
    position: fixed;
    top: 0;
    z-index: inherit;
    font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif !important;
    font-size: 32rpx;
    color: #000;
    font-weight: 500;

    .menu_btn {
      overflow: hidden;
      display: flex;
      align-items: center;
      // position: fixed;// 行内式写了固定定位--目的是去掉下划页面一起滚动问题
      .arrowleft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-160%, -50%) !important;
        -webkit-transform: translate(-160%, -50%) !important;

        // display: flex;
        // align-items: center;
        // justify-content: center;
      }
      .text_box {
        width: 1rpx;
        height: 20px;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        -webkit-transform: translate(-50%, -50%) !important;
      }
      .home {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(60%, -50%) !important;
        -webkit-transform: translate(60%, -50%) !important;
      }
    }
  }
}
</style>
