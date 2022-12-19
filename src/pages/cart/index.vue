<template>
  <view>
    <button class="test-class-btn">提交</button>
    <SoumnsUserMsg />
  </view>
</template>
<script>
import SoumnsUserMsg from '../../components/SoumnsUserMsg.vue'
export default {
  name: 'cart',
  components: {
    SoumnsUserMsg
  },
  data() {
    return {}
  },
  methods: {}
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

  ::v-deep.test-class-btn {
    width: 400rpx;
    height: 40px;
    background-color: greenyellow;
    border-radius: 40rpx;
  }
}
</style>
