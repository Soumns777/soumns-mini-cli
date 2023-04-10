<template>
  <view class='container'>
    <soumns-nav-bar class='container-top' :isShowBack='false' :imgHeight='imgHeight'
                    :backgroundImage='backgroundImage'
    >
      <template #other>
        <view class='container-nav-top'>
          测试-测试数据
        </view>
      </template>
    </soumns-nav-bar>
  </view>

</template>

<script>

import { pathToBase64, base64ToPath } from 'image-tools'

export default {
  name: 'my',
  data() {
    return {
      backgroundImage: '', // 需要用reqiure来引入图片
      imgHeight: '658rpx'
    }
  },
  onShow() {

    pathToBase64('static/uploads/bg_home.png')
      .then(base64 => {
        this.backgroundImage = base64
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {}

}
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  background-color: $bg-color;
  padding-bottom: 130rpx;
  overflow-x: hidden;

  .container-top {
    .container-nav-top {
      position: absolute;
      left: 40rpx;
      font-size: 40rpx;
      color: #FFFFFF;
    }

    .container-nav-kefu {
      position: absolute;
      right: 207rpx;
      width: 46rpx;
      height: 40rpx;
      margin-top: 10rpx;
    }
  }

}

</style>
