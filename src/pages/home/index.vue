<!--
   * @FileDescription:
   * @Author:
   * @Node:
   * @Date:
-->
<template>
  <view class='container'>
    <view class='container-top soumns-flex'>
      <!--      <image src='/static/uploads/zulin-details-car.png' mode='widthFix' class='top-car-img' />-->
      <text class='top-car-text'>苏A1980S</text>
    </view>


    <view class='container-daikuan-details'>
      <view class='daikuan-details-top soumns-flex-cart'>
        <text class='details-top-text'>期数</text>
        <text class='details-top-text'>还款日</text>
        <text class='details-top-text'>租金</text>
        <text class='details-top-text'>状态</text>
      </view>

      <view class='daikuan-details-line' />

      <view class='daikuan-details-content'>
        <scroll-view id='scroll' class='scroll' scroll-y='true'
                     scroll-with-animation='true'>
          <view class='details-content-eval soumns-flex-cart' v-for='(item,idx) in paymentInformation' :key='idx'>
            <text class='content-eval-text soumns-flex'>{{ item.stageNum }}
            </text>
            <text class='content-eval-text'>{{ item.repayDate }}</text>
            <text class='content-eval-text soumns-flex'>{{ item.repayAmount }}
            </text>
            <text class='content-eval-text' :class="item.status == JIESHU ? 'yihuan':'weihuan'">{{
                item.status == SHENGXIAO || item.status == YUQI ? '未还' : '已还'
              }}
            </text>
          </view>

        </scroll-view>
      </view>
    </view>


  </view>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      paymentInformation: [],
      SHENGXIAO: '1',// 未还
      YUQI: '2', // 逾期
      JIESHU: '3', // 已还
      scrollTop: 0
    }
  },
  onLoad() {
    this.handleInit()
  },
  onShow() {

  },
  mounted() {
    uni.createSelectorQuery().select('.daikuan-details-content').boundingClientRect((res) => {
      const scrollH = res.top
      console.log('💙💛scorllH', scrollH)
      uni.pageScrollTo({
        duration: 100,// 过渡时间
        scrollTop: 1306// 滚动的实际距离
      })
    }).exec()
  },
  methods: {
    handleInit() {
      this.paymentInformation = [
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/09',
          'stageNum': '1',
          'status': '3'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '3'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        },
        {
          'repayAmount': '2260.94',
          'repayDate': '2022/08/03',
          'stageNum': '2',
          'status': '2'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
.container {
  //min-width: 100vw;
  //min-height: 100vh;
  padding: 30rpx 0 0rpx 0;
  background-color: $bg-color;
  background-color: skyblue;

  .container-top {
    margin-left: 30rpx;
    width: 690rpx;
    height: 82rpx;
    background: #FFFFFF;
    border-radius: 16rpx;
    font-size: 30rpx;
    color: #966A3C;


    .top-car-img {
      width: 41rpx;
      height: 32rpx;
      margin-right: 20rpx;
    }

    .top-car-text {
      min-width: 142rpx;
      font-size: 30rpx;
      color: #966A3C;
    }
  }

  .container-daikuan-details {
    margin: 30rpx 30rpx 0 30rpx;
    width: 690rpx;
    //height: calc(100vh - 220rpx);
    overflow: auto;
    background: #FFFFFF;
    border-radius: 16rpx;
    padding-top: 30rpx;

    .daikuan-details-top {
      padding: 0 60rpx;

      .details-top-text {
        font-size: 28rpx;
        color: #966A3C;
        min-width: 155rpx;

        &:nth-child(2) {
          //margin: 0 99rpx 0 127rpx;
          min-width: 211rpx;
        }

        &:nth-child(3) {
          //margin-right: 108rpx;
          min-width: 148rpx;
        }

        &:last-child {
          min-width: 56rpx;
        }
      }
    }

    .daikuan-details-line {
      width: 630rpx;
      height: 2rpx;
      margin: 30rpx 0 0 30rpx;
      background-image: linear-gradient(to right, #e3e7e9 35%, rgba(255, 255, 255, 0) 0%); /* 35%设置虚线点x轴上的长度 */
      background-position: bottom; /* top配置上边框位置的虚线 */
      background-size: 20rpx 2rpx; /* 第一个参数设置虚线点的间距；第二个参数设置虚线点y轴上的长度 */
      background-repeat: repeat-x;
    }

    .daikuan-details-content {

      //.scroll {
      //  white-space: nowrap;
      //  width: 100%;
      //  position: absolute;
      //  left: 0;
      //  right: 0;
      //  background: #FFFFFF;
      //}

      .details-content-eval {
        //position: relative;
        height: 100rpx;
        background-color: #fff;

        &:nth-child(2n) {
          height: 80rpx;
          background-color: #f8faff;
        }

        .content-eval-text {
          //position: absolute;
          //left: 71rpx;
          //min-width: 50rpx;
          color: #919191;
          min-width: 173rpx;
          font-size: 28rpx;

          &:nth-child(2) {
            min-width: 163rpx;
          }

          &:nth-child(3) {
            min-width: 238rpx;
          }

          &:nth-child(4) {
            min-width: 56rpx;
          }

          //
          //&:nth-child(2) {
          //  left: 173rpx;
          //  min-width: 163rpx;
          //}
          //
          //&:nth-child(3) {
          //  left: 403rpx;
          //  min-width: 103rpx;
          //}
          //
          //&:nth-child(4) {
          //  left: 574rpx;
          //  min-width: 56rpx;
          //}


        }

        /* 已还 */
        .yihuan {
          color: #417505;
        }

        /* 未还 */
        .weihuan {
          color: #D7312E;
        }

        /* 预期*/
        .yuqi {
          color: #266fff;
        }


      }


    }

  }


}
</style>
