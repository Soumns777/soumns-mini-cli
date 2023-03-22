<!--
    @desc 自定义获取用户头像和昵称组件
 -->

<template>
  <form action='/src/static' class="container" @submit="submit">
    <view class="container-user-photo">
      <u--image src="/static/uploads/default.jpeg" mode="widthFix" width="66px" height="66px" v-if="isShowDefault"></u--image>

      <u-image :src="avatar" width="66px" height="66px" mode="widthFix" v-else></u-image>

      <button open-type="chooseAvatar" @chooseavatar="chooseAvatar" class="user-custome-photo"></button>
    </view>

    <u--input type="nickname" placeholder="请输入内容" border="surround" v-model="nickName" @change="change" class="user-input"></u--input>
  </form>
</template>

<script>
export default {
  name: 'SoumnsUserMsg',
  data() {
    return {
      isShowDefault: true,
      avatar: '',
      nickName: ''
    }
  },
  mounted() {},
  methods: {
    chooseAvatar(e) {
      this.isShowDefault = false
      this.avatar = e.detail.avatarUrl
      console.log('💙💛 选择用户头像:', e)
    },

    onNickName(e) {
      console.log('💙💛 昵称:', e)
    },

    submit(e) {
      console.log('💙💛 提交:', e)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .container-user-photo {
    margin: 40px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-custome-photo {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 132rpx;
      height: 132rpx;
      transform: translate(-50%, -50%);
      z-index: 2;
      opacity: 0;
    }

    :deep(.user-input) {
      margin-top: 40rpx;
      border: 100rpx solid #f9f9f9;
    }

    .submit-btn {
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
