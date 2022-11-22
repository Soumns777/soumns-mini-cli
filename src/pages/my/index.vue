<template>
  <view>
    <soumns-navbar :imgSrc="imgSrc" :imgHeight="imgHeight" :isShowBack="false">
      <template #other>
        <view :style="{ position: 'fixed', marginLeft: '240px', marginTop: '7px' }">
          <u-icon name="server-fill" color="#fff" size="24"></u-icon>
        </view>
      </template>
    </soumns-navbar>

    <view :style="{ marginTop: imgHeight, color: '#ff6100', zIndex: 2, width: '200px', height: '40px', backgroundColor: 'skyblue' }">999</view>

    <label>11</label>
  </view>
</template>

<script>
import SoumnsNavbar from '../../components/SoumnsNavbar.vue'
export default {
  components: {
    SoumnsNavbar
  },
  data() {
    return {
      imgSrc: require('@/static/uploads/bg_home.png'), // 需要用reqiure来引入图片
      imgHeight: '658rpx'
    }
  },
  methods: {}
}
</script>
