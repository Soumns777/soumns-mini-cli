<template>
  <view class="page_box">
    <image class="container-top-bg" src="@/static/uploads/bg_home.png" mode="widthFix" lazy-load="false" binderror="" bindload=""> </image>

    <!-- 自定义顶部左侧胶囊 -->
    <view class="my_tab_title" :style="{ paddingTop: statusBarHeight }">
      <!-- <view class="menu_btn" :style="{ position: 'fixed', top: menuTop, left: menuRight, width: menuWidth, height: menuHeight }">
        <u-icon name="arrow-left" class="arrowleft" color="#fff" size="20"></u-icon>
      </view> -->

      <view class="menu_btn" :style="{ position: 'fixed', top: menuTop, right: '40px', width: menuWidth, height: menuHeight }">
        <u-icon name="server-fill" class="arrowleft" color="#fff" size="2"></u-icon>
      </view>
    </view>

    <!-- 上部内容 -->
    <view class="container-top-content" selectable="false" space="false" decode="false">
      <text class="text1" selectable="false" space="false" decode="false"> 测试数据的 </text>
      <text class="text2" selectable="false" space="false" decode="false"> 测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1 </text>
    </view>

    <!-- 图片 -->
    <image class="container-card" src="@/static/uploads/home_card.png" mode="widthFix" lazy-load="false" binderror="" bindload=""> </image>

    <!-- 占位盒子 -->
    <view class="" :style="{ width: '750px', height: '840rpx', zIndex: '2' }" hover-class="none" hover-stop-propagation="false"> </view>

    {{ access_token }}

    <!-- 立即分享 -->
    <!-- <u-button type="warning" :custom-style="btnStyle" shape="circle" open-type="share">立即分享</u-button> -->

    <button class="soumns-btn" :style="{ backgroundColor: 'springgreen' }" @click="requestSubscribe()">订阅消息</button>

    <!-- <button class="soumns-btn" :style="{ backgroundColor: 'skyblue', marginTop: '20px' }" @click="getUserInfo()">获取头像</button> -->

    <!-- <u-image :src="avatarUrl" width="80px" height="80px" mode="widthFix" shape="square" radius="50%" /> -->
  </view>
</template>

<script>
import { LOGIN } from '@/services/request.js'
export default {
  name: 'home',
  data() {
    return {
      bgColor: '#ff6100', // 434761
      statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight, // 状态栏的高度（可以设置为顶部导航条的padding-top）
      menuWidth: uni.getStorageSync('menuInfo').menuWidth,
      menuHeight: uni.getStorageSync('menuInfo').menuHeight,
      menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
      menuRight: uni.getStorageSync('menuInfo').menuRight,
      menuTop: uni.getStorageSync('menuInfo').menuTop,
      contentTop: uni.getStorageSync('menuInfo').contentTop,

      access_token: '',
      btnStyle: {
        width: '300px',
        height: '60px',
        backgroundColor: 'springgreen'
      },

      avatarUrl: ''
    }
  },
  onLoad(options) {
    if (options.phone) {
      console.log(options.phone, '💙💛 通过别人分享进来')
    } else {
      console.log('💙💛 自己进入')
    }

    // this.login()

    this.initSetting()

    this.initCode()
  },

  methods: {
    async login() {
      const {
        data: { data, RESULT_CODE, RESULT_MSG }
      } = await LOGIN({
        userName: 'admin',
        password: '123456'
      })

      console.log(RESULT_CODE, RESULT_MSG, data, '💙💛 Login返回数据')

      if (RESULT_CODE != '0000') {
        return uni.showToast({
          title: '登录失败了',
          duration: 1500,
          icon: 'error'
        })
      } else {
        uni.showToast({
          title: '登录成功',
          duration: 1500,
          icon: 'success'
        })

        this.access_token = data.access_token
      }
    },

    /**
     * @desc 发起消息订阅
     */
    requestSubscribe() {
      var that = this

      uni.showModal({
        title: '温馨提示',
        content: '为更好的促进您与本司的交流，服务号需要在您完成签约时向您发送消息',
        confirmText: '同意',
        cancelText: '拒绝',
        success: function (res) {
          if (res.confirm) {
            // 调用订阅消息
            console.log('用户点击确定')
            // 调用订阅

            // kwgf_A_qUx4HNlZNbRjgxavMsX0HYNo9YEf9E9XVUP8
            uni.requestSubscribeMessage({
              tmplIds: ['kwgf_A_qUx4HNlZNbRjgxavMsX0HYNo9YEf9E9XVUP8', 'q-hbwQRkjW8jDJYdmBmpQtwrDg-fhmnergmbfKMofYY'],
              success: (res) => {
                console.log(res, '💙💛 订阅成功')
              },
              fail: (errCode, errMessage) => {
                console.log(errCode, errMessage, '💙💛 订阅消息 失败 ')
              }
              // complete: (errMsg) => {
              //   console.log(errMsg, '订阅消息 完成 ')
              // }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            // 显示第二个弹说明一下
            wx.showModal({
              title: '温馨提示',
              content: '拒绝后您将无法获取实时的与本司的交易消息',
              confirmText: '知道了',
              showCancel: false,
              success: function (res) {
                ///点击知道了的后续操作
                ///如跳转首页面
              }
            })
          }
        }
      })
    },

    /**
     * @desc init user setting
     */
    initSetting() {
      uni.getSetting({
        withSubscriptions: true,
        success(res) {
          console.log(res, '💙💛 init setting success')

          if (res.subscriptionsSetting.mainSwitch) {
            uni.showToast({
              title: '用户已经订阅消\r\n息',
              duration: 1000
            })
          }
        },
        fail(err) {
          console.log(err, '💙💛 init setting fail')
        }
      })
    },

    /**
     * @desc initCode
     */
    initCode() {
      // 传递this变量
      var that = this
      uni.login({
        provider: 'weixin',
        success(loginRes) {
          console.log(loginRes, '💙💛 loginRes')
        }
      })
    },

    /**
     * @desc init user info
     */
    getUserInfo() {
      let _ = this
      uni.getUserProfile({
        desc: '展示用户头像信息',
        success(res) {
          console.log(res, '💙💛 获取头像信息成功')

          _.avatarUrl = res.userInfo.avatarUrl

          console.log(_.avatarUrl, '💙💛 this.avatarUrl')
        },
        fail(err) {
          console.log(err, '💙💛 获取头像信息失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page_box {
  position: fixed;

  .my_tab_title {
    width: 100%;
    line-height: 44px;
    position: fixed;
    top: 0;
    font-size: 32rpx;
    color: #fff;
    font-weight: 500;

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

  .container-top-bg {
    width: 100%;
    height: 658rpx;
    position: fixed;
    top: 0;
    left: 0;
  }

  .container-top-content {
    position: absolute;
    top: 179rpx;
    left: 30rpx;
    width: 750rpx;
    height: 60rpx;
    display: flex;
    flex-direction: column;

    .text1 {
      font-size: 40rpx;
      color: #fff;
      margin-bottom: 24rpx;
    }

    .text2 {
      opacity: 0.8;
      font-size: 26rpx;
      color: #ffffff;
      letter-spacing: 0;
      text-align: justify;
      line-height: 39rpx;
      margin-right: 30px;
    }
  }

  .container-card {
    position: absolute;
    top: 388rpx;
    left: 30rpx;
    width: 690rpx;
    height: 422rpx;
  }

  .user-avatar {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }
}
</style>
