<template>
  <view>
    <!-- 2.0.19支持autoBack，默认为false -->
    <!-- :bgColor="bgColor" -->
    <!-- :placeholder="true" -->

    <u-navbar title="个人中心" @rightClick="rightClick" :autoBack="true"> </u-navbar>

    <image class="" :style="{ width: '100%', position: 'fixed', top: '0px', left: '0', zIndex: '2000' }" src="@/static/uploads/bg_top.png" mode="widthFix" lazy-load="false" binderror="" bindload="">
    </image>

    <!--  -->
    <!-- :style="{ marginTop: '230px', width: '200px', height: '50px' }" -->
    <button class="soumns-btn" type="primary">通过方法跳转到about页面</button>

    <button type="primary" loading="true">页面主操作 Loading</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bgColor: '#76EEC6'
    }
  },
  methods: {
    rightClick() {
      console.log('rightClick')
    },
    leftClick() {
      console.log('leftClick')
    }
  }
}
</script>
