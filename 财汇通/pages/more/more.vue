<template>
  <view class="more=body">
    <view class="header">
      <view class="head content">
        <view class="head-l">
          <view class="head-l-l">
            <image src="/static/logo-m.png" mode="widthFix"></image>
          </view>
          <view class="head-l-m"></view>
          <view class="head-l-r">
            <text>企业合规节税方案提供商</text>
            <text>30年资深会计，具备财税部门供职经验</text>
          </view>
        </view>
        <image class="head-r" id="head-img-right" src="/static/menu.png" @click="open()" mask maskClick width></image>
        <uniDrawer class="drawer" ref="draw">
          <view class="drawer-sub">
            <view class="drawer-box">
              <navigator url="../index/index" open-type="switchTab">
                <view class="drawer-item">
                  首页
                </view>
              </navigator>
              <navigator url="../register/register">
                <view class="drawer-item">
                  工商注册
                </view>
              </navigator>
              <navigator url="../bookkeeping/bookkeeping">
                <view class="drawer-item">
                  代理记账
                </view>
              </navigator>
              <navigator url="../handle/handle">
                <view class="drawer-item">
                  资质办理
                </view>
              </navigator>
              <navigator url="../audit/audit">
                <view class="drawer-item">
                  财务审计
                </view>
              </navigator>
              <navigator url="../more/more">
                <view class="drawer-item">
                  更多服务
                </view>
              </navigator>
              <navigator url="../case/case" open-type="switchTab">
                <view class="drawer-item">
                  客户案例
                </view>
              </navigator>
              <navigator url="../news/news">
                <view class="drawer-item">
                  新闻中心
                </view>
              </navigator>
              <navigator url="../about/about" open-type="switchTab">
                <view class="drawer-item">
                  关于我们
                </view>
              </navigator>
              <navigator url="../contact/contact">
                <view class="drawer-item">
                  联系我们
                </view>
              </navigator>

              <view class="tel">
                一键拨打
              </view>
            </view>
          </view>
        </uniDrawer>
      </view>
    </view>
    <image :src="'http://www.cdcaihuitong.com'+ info_banner.banner" mode="widthFix" class="page-banner"></image>
    <view class="crumbs" v-for="(item,index) in list_breadcrumb" :key="index">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > {{item.name}}</text>
      </view>
    </view>
    <view class="more">
      <view class="content">
        <view class="more-title">
          <view class="btitle">财惠通财税</view>
          <view class="stitle">企业财税合规整体解决方案服务商</view>
        </view>
        <view class="more-list">
          <view class="more-info">
            <view class="more-item"  v-for="(item,index) in list_document.data" :key="index">
              <view class="more-item-top">
                <image :src="'http://www.cdcaihuitong.com/'+item.content_image_url" mode=""></image>
              </view>
              <view class="more-bottom">
                <view class="more-item-title">{{item.title}}</view>
                <view class="more-item-desc">{{item.title}}的内容：
                  <view>{{item.pc_content_describe}}</view>
                </view>
                <view class="more-detail">
                  <view class="more-learn">
                    <navigator url="item.document_url">了解详情</navigator>
                  </view>
                  <text class="more-bar"></text>
                  <view class="more-zx" @click="getPhone(info_config.web_site_mobile)">立即咨询</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      </view>
      <info :info_config="info_config"></info>
    </view>
</template>

<script>
  import uniDrawer from "../../components/uni-drawer/uni-drawer.vue"
  import info from "../../components/info.vue"
  export default {
    data() {
      return {
        info_config: {},
        index: 0,
        info_banner: {},
        list_breadcrumb: [],
        list_document:{},
        phone:''
      }
    },
    onLoad() {
      uni.request({
        url: this.$url + '/content/api/getColumn?id=2',
        method: 'POST',
        success: (res) => {
          console.log(res)
          this.list_breadcrumb = res.data.data.list_breadcrumb,
            this.info_banner = res.data.data.info_banner,
            this.list_document = res.data.data.list_document,
            this.info_config = res.data.data.info_config
        }
      })
    },
    methods: {
      open() {
        this.$refs.draw.open();
      },
      onChange(e) {
        this.index = e.detail.current
      },
      getPhone(phone){
        var phone=this.phone;
        this.phone = phone;
        uni.makePhoneCall({
          phoneNumber:this.phone
        })
      }
    },
    components: {
      info,
      uniDrawer
    }
  }
</script>



<style lang="scss">
  .content {

    padding-left: 30rpx;

    padding-right: 30rpx;

  }

  .header {

    position: fixed;

    top: 0;

    left: 0;

    right: 0;

    z-index: 999;

    background-color: white;

    .head {

      height: 120rpx;

      display: flex;

      justify-content: space-between;

      align-items: center;

      .head-l {

        display: flex;

        align-items: center;

      }

      .head-l-l image {

        width: 90rpx;

      }

      .head-l-m {

        width: 1rpx;

        height: 56rpx;

        background: #434343;

        margin-left: 26rpx;

      }

      .head-l-r text:first-child {

        display: block;

        margin-left: 18rpx;

        font-weight: bold;

        line-height: 30rpx;

        font-size: 30rpx;

        letter-spacing: 1rpx;

        color: #000000;

      }

      .head-l-r text:last-child {

        display: block;

        margin-top: 17rpx;

        margin-left: 18rpx;

        line-height: 20rpx;

        font-size: 20rpx;

        color: #666666;

      }

      .head-r {

        width: 45rpx;

        height: 30rpx;

      }

      .drawer {

        height: 100%;

        opacity: 1;

      }

      .drawer-box {

        width: 100%;

        margin-top: 100rpx;

      }

      .drawer-item {

        margin: 30rpx auto;

        width: 250rpx;

        height: 50rpx;

        border: 1rpx solid #161616;

        text-align: center;

        line-height: 50rpx;

        border-radius: 25rpx;

      }

      .tel {

        margin: 40rpx auto;

        width: 300rpx;

        height: 70rpx;

        color: #ffffff;

        text-align: center;

        line-height: 70rpx;

        border-radius: 35rpx;

        background-color: #FF504D;

      }

    }

  }

  .page-banner {
    margin-top: 120rpx;
    width: 100%;

  }

  .crumbs {

    width: 100%;

    height: 54rpx;

    border-bottom: 1px dashed #DCDCDC;

    .content {

      display: flex;

      align-items: center;

      height: 100%;

      .crumbs-bar {

        width: 5rpx;

        height: 12rpx;

        background-color: #FF504D;

        margin-right: 15rpx;

      }

      text {

        font-size: 18rpx;

        color: #666;

      }

    }

  }

  .more {
    .more-title {
      margin-top: 67rpx;
      width: 100%;
      margin-bottom: 50rpx;

      .btitle {
        font-size: 38rpx;
        text-align: center;
        line-height: 38rpx;
        letter-spacing: 2rpx;
        margin-bottom: 20rpx;
      }

      .stitle {
        font-size: 26rpx;
        color: #666;
        line-height: 26rpx;
        text-align: center;
      }
    }

    .more-list {
      .more-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .more-item {
          width: 330rpx;
          height: 476rpx;
          border: 1rpx solid #999999;
          box-sizing: border-box;
          padding: 11rpx;
          margin-bottom: 40rpx;

          .more-item-top {
            width: 100%;
            height: 211rpx;

            image {
              width: 100%;
              height: 100%;
            }
          }

          .more-bottom {
            width: 100%;
            padding: 10rpx;

            .more-item-title {
              font-size: 32rpx;
              color: #333;
              font-weight: 500;
              line-height: 32rpx;
              margin-top: 28rpx;
              margin-bottom: 15rpx;
              text-align: center;
            }

            .more-item-desc {
              font-size: 26rpx;
              color: #666;
              line-height: 42rpx;

              view {
                width:280rpx;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .more-detail {
              margin-top: 30rpx;
              display: flex;
              justify-content: center;

              view {
                font-size: 28rpx;
                color: #333;
                line-height: 28rpx;
              }

              text {
                display: block;
                height: 28rpx;
                border-left: 1rpx dashed #666666;
                margin: 0 20rpx;
              }
            }
          }
        }
      }
    }
  }
</style>
