<!--
    @desc 自定义Navbar组件
 -->

<template>
  <view class="container-navbar" :style="{
    minHeight:imgHeight,
    backgroundImage: `url(${backgroundImage})`
  }">

    <!--    <image-->
    <!--        class="container-top-bg"-->
    <!--        :src="imgSrc"-->
    <!--        mode="widthFix"-->
    <!--        lazy-load="false"-->
    <!--        binderror=""-->
    <!--        bindload=""-->
    <!--        :style="{ height: imgHeight }"-->
    <!--    ></image>-->

    <!-- 自定义顶部左侧胶囊 -->
    <view
        class="container-capsule"
        :style="{ paddingTop: menuInfo.menuTop}"
    >
      <view
          class="menu_btn"
          v-if="isShowBack"
          :style="{
          position: 'fixed',
          top: menuInfo.menuTop,
          left: menuInfo.menuRight,
          width: menuInfo.menuWidth,
          height: menuInfo.menuHeight
        }"
      >
        <!--        <u-icon-->
        <!--            name="arrow-left"-->
        <!--            class="arrowleft"-->
        <!--            color="#fff"-->
        <!--            :size="size"-->
        <!--        ></u-icon>-->
      </view>

      <slot name="other"></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'soumnsNavbar',
  computed: {},
  props: {
    imgSrc: {
      type: String,
      required: false
    }, // 图片路径
    imgHeight: {
      type: String,
      required: true
    }, // 图片高度
    isShowBack: {
      type: Boolean,
      required: true,
      default: true
    }, // 是否展示返回按钮
    size: {
      type: String,
      required: false,
      default: '24'
    },// 左侧按钮尺寸
    backgroundImage: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      menuInfo: {
        statusBarHeight: '', // 手机系统的状态栏高度
        menuTop: '', // 右侧的胶囊顶部距离屏幕顶部的距离--用来给自定义导航条页面的左侧胶囊设置使用
        menuRight: '', // 右侧的胶囊距离右侧屏幕距离--用来给自定义导航条页面的左侧胶囊设置使用
        menuWidth: '', // 右侧的胶囊宽度--用来给自定义导航条页面的左侧胶囊设置使用
        menuHeight: '' // 右侧的胶囊高度--用来给自定义导航条页面的左侧胶囊设置使用
      }
    };
  },
  mounted() {
    this.initNavBar();
  },
  methods: {
    initNavBar() {
      uni.getSystemInfo({
        success: result => {
          // 获取手机系统的状态栏高度（不同手机的状态栏高度不同）  （ 不要使用uni-app官方文档的var(--status-bar-height) 官方这个是固定的20px  不对的 ）
          let statusBarHeight = result.statusBarHeight + 'px';
          // 获取右侧胶囊的信息 单位px
          const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
          // bottom: 胶囊底部距离屏幕顶部的距离
          // height: 胶囊高度
          // left:   胶囊左侧距离屏幕左侧的距离
          // right:  胶囊右侧距离屏幕左侧的距离
          // top:    胶囊顶部距离屏幕顶部的距离
          // width:  胶囊宽度

          let menuWidth = menuButtonInfo.width + 'px';
          let menuHeight = menuButtonInfo.height + 'px';
          let menuBorderRadius = menuButtonInfo.height / 2 + 'px';
          let menuRight =
              result.screenWidth - menuButtonInfo.right + 10 + 'px';
          let menuTop = menuButtonInfo.top + 'px';
          let contentTop = result.statusBarHeight + 44 + 'px';
          let menuInfo = {
            statusBarHeight: statusBarHeight, // 状态栏高度----用来给自定义导航条页面的顶部导航条设计padding-top使用：目的留出系统的状态栏区域
            menuWidth: menuWidth, // 右侧的胶囊宽度--用来给自定义导航条页面的左侧胶囊设置使用
            menuHeight: menuHeight, // 右侧的胶囊高度--用来给自定义导航条页面的左侧胶囊设置使用
            menuBorderRadius: menuBorderRadius, // 一半的圆角--用来给自定义导航条页面的左侧胶囊设置使用
            menuRight: menuRight, // 右侧的胶囊距离右侧屏幕距离--用来给自定义导航条页面的左侧胶囊设置使用
            menuTop: menuTop, // 右侧的胶囊顶部距离屏幕顶部的距离--用来给自定义导航条页面的左侧胶囊设置使用
            contentTop: contentTop // 内容区距离页面最上方的高度--用来给自定义导航条页面的内容区定位距离使用
          };
          console.log("💙💛初始化手机顶部数据:", menuInfo)
          this.menuInfo = menuInfo

        },
        fail: error => {
          console.log(error);
        }
      });

    }
  }
};
</script>

<style scoped lang="scss">
.container-navbar {
  width: 100%;
  background-size: 100% 100%;


  .container-top-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .container-capsule {
    width: 100%;
    position: fixed;
    top: 0;
    font-size: 32rpx;
    color: #fff;


    .menu_btn {
      overflow: hidden;
      display: flex;
      align-items: center;
      position: fixed; // 行内式写了固定定位--目的是去掉下划页面一起滚动问题
      .arrowleft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-160%, -50%) !important;
        -webkit-transform: translate(-160%, -50%) !important;
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
