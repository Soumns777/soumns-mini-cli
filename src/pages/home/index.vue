<!--
   * @FileDescription:
   * @Author:
   * @Node:
   * @Date:
-->
<template>
  <view class='container'>
    <!--    open-type='share'-->
    <button @click='handleOpenPdf'>打开pdf</button>

    <button @click='handleSharePdf'>转发</button>


    <button @click='handleDownloadPdf'>下载</button>
    <!--    <view class='container-top soumns-flex'>-->
    <!--      <text class='top-car-text'>苏A1999S</text>-->
    <!--    </view>-->


    <!--    <view class='container-daikuan-details'>-->
    <!--      <view class='daikuan-details-top soumns-flex-cart'>-->
    <!--        <text class='details-top-text'>期数</text>-->
    <!--        <text class='details-top-text'>还款日</text>-->
    <!--        <text class='details-top-text'>租金</text>-->
    <!--        <text class='details-top-text'>状态</text>-->
    <!--      </view>-->

    <!--      <view class='daikuan-details-line' />-->

    <!--      <view class='daikuan-details-content'>-->
    <!--        <scroll-view scroll-y='true'-->
    <!--                     style='height: 900rpx'-->
    <!--                     scroll-with-animation='true' :scroll-into-view='scrollId'>-->
    <!--          <view class='details-content-eval soumns-flex-cart' v-for='(item,idx) in paymentInformation' :id='item.id'-->
    <!--                :key='idx' @click='handleClick(item.id)'>-->
    <!--            <text class='content-eval-text soumns-flex'>{{ item.stageNum }}-->
    <!--            </text>-->
    <!--            <text class='content-eval-text'>{{ item.repayDate }}</text>-->
    <!--            <text class='content-eval-text soumns-flex'>{{ item.repayAmount }}-->
    <!--            </text>-->
    <!--            <text class='content-eval-text' :class="item.status == JIESHU ? 'yihuan':'weihuan'">{{-->
    <!--                item.status == SHENGXIAO || item.status == YUQI ? '未还' : '已还'-->
    <!--              }}-->
    <!--            </text>-->
    <!--          </view>-->

    <!--        </scroll-view>-->
    <!--      </view>-->
    <!--    </view>-->
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
      scrollId: '' // 滚动位置
    }
  },
  onLoad() {
    // this.handleInit()

    // const updateManager = wx.getUpdateManager()
    // if (this.$version < 101) {
    //   updateManager.onUpdateReady(function() {
    //     wx.showModal({
    //       title: '更新提示',
    //       content: '新版本已经准备好，是否重启应用？',
    //       success: function(res) {
    //         if (res.confirm) {
    //           // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
    //           updateManager.applyUpdate()
    //         }
    //       }
    //     })
    //   })
    //   updateManager.onUpdateFailed(function() {
    //     // 新的版本下载失败
    //     wx.showModal({
    //       title: '已经有新版本了哟~',
    //       content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
    //     })
    //   })
    // }
  },
  onShow() {

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
        }
      ]

      //  已还
      const hadRepay = this.paymentInformation.filter(item => item.status == '3')

      //  未还
      const hadNotRepay = this.paymentInformation.filter(item => item.status == '1' || item.status == '2')

      this.paymentInformation = [...hadRepay, ...hadNotRepay]

      this.paymentInformation.map((item, idx) => {
        this.$set(item, 'id', 'S' + (Number(idx) + 1))
      })

      console.log('💙💛hadRepay', hadRepay.length)

      // 滚动到指定位置
      this.scrollId = 'S' + hadRepay.length
    },

    handleClick(id) {
      this.scrollId = id
    },


    /**
     * @desc 预览pdf
     */
    handleOpenPdf() {
      uni.showLoading({ title: '正在下载...' })

      uni.downloadFile({
        url: 'https://xfjf.saomiaoapp.cn/smwtzpdf/pdf/pdf-MCRUYFJB8U6L.pdf', //下载地址接口返回
        success: (data) => {
          if (data.statusCode === 200) {
            uni.hideLoading()

            uni.openDocument({
              //新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
              filePath: data.tempFilePath,
              showMenu: true,
              success: function(res) {
                console.log('💙💛打开文档成功')
              }
            })

            //文件保存到本地
            // uni.saveFile({
            //   tempFilePath: data.tempFilePath, //临时路径
            //   success: function(resd) {
            //     uni.showToast({
            //       icon: 'success',
            //       mask: true,
            //       title: '下载成功',
            //       duration: 2000
            //     })
            //
            //
            //     //自动打开文档查看
            //     setTimeout(() => {
            //       var filePath = resd.savedFilePath
            //       uni.openDocument({
            //         //新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
            //         filePath: filePath,
            //         showMenu: true,
            //         success: function(res) {
            //           console.log('打开文档成功')
            //         }
            //       })
            //     }, 2000)
            //   }
            // })
            //

          }
        }
      })

    },


    /**
     * @desc 分享pdf
     */
    handleSharePdf() {
      wx.downloadFile({
        url: 'https://xfjf.saomiaoapp.cn/smwtzpdf/pdf/pdf-MCRUYFJB8U6L.pdf', // 下载url
        success(res) {
          // 下载完成后转发
          wx.shareFileMessage({
            filePath: res.tempFilePath,
            success() {
            },
            fail: console.error
          })
        },
        fail: console.error
      })
    },


    /**
     * @desc 下载pdf到本地
     */
    handleDownloadPdf() {
      var pdfUrl = 'https://xfjf.saomiaoapp.cn/smwtzpdf/pdf/pdf-MCRUYFJB8U6L.pdf' // PDF 文件的网络地址

      wx.downloadFile({
        url: pdfUrl,
        success: function(res) {
          var tempFilePath = res.tempFilePath // 下载成功后的临时文件路径

          // 获取文件系统管理器
          var fs = wx.getFileSystemManager()


          // 指定保存的文件路径
          var savedFilePath = wx.env.USER_DATA_PATH + '/saved_file.pdf'

          // 将临时文件保存到指定路径
          fs.saveFile({
            tempFilePath: tempFilePath,
            filePath: savedFilePath,
            success: function(res) {
              console.log('💙💛文件保存成功', res.savedFilePath)

              // 使用 savedFilePath 进行后续操作，例如展示、分享等
              // 注意：savedFilePath 为本地的绝对路径，可以在小程序中进行访问
            },
            fail: function(error) {
              console.error('文件保存失败:', error)
            }
          })
        },
        fail: function(error) {
          console.error('文件下载失败:', error)
        }
      })
    }

  }
}
</script>

<style scoped lang='scss'>
.container {


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
    height: calc(100vh - 300rpx);

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
          min-width: 211rpx;
        }

        &:nth-child(3) {
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
      height: calc(100% - 160rpx);
      overflow: auto;

      .details-content-eval {
        position: relative;
        height: 100rpx;
        background-color: #fff;

        &:nth-child(2n) {
          height: 80rpx;
          background-color: #f8faff;
        }

        .content-eval-text {
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


        }

        /* 已还 */
        .yihuan {
          color: #417505;
        }

        /* 未还 */
        .weihuan {
          color: #D7312E;
        }

        /* 逾期 */
        .yuqi {
          color: #266fff;
        }


      }


    }

  }


}
</style>
