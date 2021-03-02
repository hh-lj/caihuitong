<template>
  <view class="register-body">
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
              <navigator url="../case/case"  open-type="switchTab">
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
    <image class="contact-banner" src="../../static/register/regidter-banner.jpg" mode="widthFix"></image>
    <view class="crumbs">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > 工商注册</text>
      </view>
    </view>
    <!-- 创业第一步，公司注册很关键 -->
    <view class="key">
      <view class="content">
        <view class="rtitle">创业第一步，公司注册很关键</view>
        <image src="../../static/register/key-img.jpg" mode="widthFix"></image>
      </view>
    </view>
    <!-- 注册公司，您可以这样做 -->
    <view class="do">
      <view class="content">
        <view class="rtitle">注册公司，您可以这样做</view>
        <image src="../../static/register/gszc.jpg" mode="widthFix"></image>
      </view>
    </view>
    <!-- 找代理公司的三大注意事项 -->
    <view class="attention">
      <view class="content">
        <view class="rtitle">找代理公司的三大注意事项</view>
        <view class="attention-list">
          <view class="attention-item">
            <view class="attention-icon">
              <image src="../../static/register/gs-zy1.png"></image>
            </view>
            <view class="attention-title">专业的代理公司注册</view>
            <view class="attention-desc">专业代理公司熟悉操作流程与规范，相比自己去做省时更省力</view>
          </view>
          <view class="attention-item">
            <view class="attention-icon">
              <image src="../../static/register/gs-zy2.png"></image>
            </view>
            <view class="attention-title">代理公司正规合法</view>
            <view class="attention-desc">合规合法的代理公司是政府承认的代理企业，具有较强的风险承担能力</view>
          </view>
          <view class="attention-item attention-item-three">
            <view class="attention-icon">
              <image src="../../static/register/gs-zy3.png"></image>
            </view>
            <view class="attention-title">熟悉政策法规，帮助合法节税</view>
            <view class="attention-desc">熟悉政策的代理公司能熟练运用相关政策，帮助企业获取政策红利</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 选择财惠通的三大理由 -->
    <view class="reason">
      <view class="content">
        <view class="rtitle">选择财惠通的三大理由</view>
        <view class="reason-bar"></view>
        <view class="reason-stitle">财惠通财税，30年专注工商税务、为您解决所有注册难题</view>
        <swiper class="reason-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#B3B3B3" indicator-active-color="#FF504D">
          <swiper-item>
            <view class="swiper-item">
              <view class="reason-item-top">
                <image src="../../static/register/gs-ly1.jpg" mode="widthFix"></image>
              </view>
              <view class="reason-bottom">
                <view class="reason-title">资深会计，合理节税</view>
                <view class="reason-english">Senior accountant, reasonable tax - saving</view>
                <view class="reason-desc">30年行业经验，创始人具有政府财税部门供职经验，熟悉流程，了解政策。具有相关资质许可</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
              <view class="swiper-item">
                <view class="reason-item-top">
                  <image src="../../static/register/gs-ly2.jpg" mode="widthFix"></image>
                </view>
                <view class="reason-bottom">
                  <view class="reason-title">正规财税单位，行业会员单位</view>
                  <view class="reason-english">Formal financial and tax units, industry member units</view>
                  <view class="reason-desc">正规单位，拥有代理记账许可，财税行业会员单位，</view>
                </view>
              </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <view class="reason-item-top">
                <image src="../../static/register/gs-ly1.jpg" mode="widthFix"></image>
              </view>
              <view class="reason-bottom">
                <view class="reason-title">30年行业经验，熟悉流程政策</view>
                <view class="reason-english">30 years industry experience, familiar with process policy</view>
                <view class="reason-desc">30年资深老会计，多家国企、上市企业财税顾问，从经营之初就帮您合规合法操作，帮助企业合理合法节税，提前规避税务风险</view>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="select">
      <view class="content">
        <view class="rtitle">合作案例</view>
        <swiper class="select-list" autoplay="true" interval="3100" circular="true" indicator-dots="true"
            indicator-color="#666" indicator-active-color="#FF504D">
            <swiper-item>
              <view class="swiper-item">
              
                  <view class="select-item">
                    <view class="select-item-top">
                      <image src="../../static/anli3.jpg" mode=""></image>
                    </view>
                      <text>财务代理----成都市力...</text>
                </view>
                 
                <view class="select-item">
                  <view class="select-item-top">
                    <image src="../../static/anli2.jpg" mode=""></image> 
                  </view>
                   <text>财务报表审计----成都...</text>
                </view>
             </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item">
                <view class="select-item">
                  <view class="select-item-top">
                    <image src="../../static/anli1.jpg" mode=""></image>
                </view>
                    <text>财务代理----成都微粮...</text>
                  </view>
              </view>
            </swiper-item>
          </swiper>
        
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
        info_config: {}
      }
    },
    methods: {
      open() {
        this.$refs.draw.open();
      },
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

  .register-banner {
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

  // 标题
  .rtitle {
    font-size: 40rpx;
    color: #333;
    font-weight: bold;
    margin-top: 66rpx;
    margin-bottom: 50rpx;
    text-align: center;
  }

  // 创业第一步，公司注册很关键
  .key {
    width: 100%;

    image {
      width: 100%;
    }
  }

  // 注册公司，您可以这样做
  .do {
    width: 100%;

    image {
      width: 100%;
    }
  }

  // 找代理公司的三大注意事项
  .attention {
    width: 100%;

    .attention-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .attention-item {
        width: 336rpx;
        height: 367rpx;
        box-sizing: border-box;
        padding: 50rpx 30rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        box-shadow: 0rpx 2rpx 11rpx 0rpx #F0F0F0;
        margin-bottom: 18rpx;

        .attention-icon {
          width: 86rpx;
          height: 86rpx;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .attention-title {
          font-size: 30rpx;
          color: #171718;
          line-height: 30rpx;
        }

        .attention-desc {
          text-align: justify;
          font-size: 24rpx;
          color: #9096A1;
          line-height: 36rpx;
        }
      }

      .attention-item-three {
        width: 543rpx;
        height: 332rpx;

        .attention-desc {
          text-align: center;
        }
      }
    }
  }

  // 选择财惠通的三大理由
  .reason{
    margin-top: 65rpx;
    width: 100%;
    background: url(../../static/register/gs-ly-bg.jpg);
    background-size: 100% 327rpx;
    background-repeat: no-repeat;
    padding-top: 70rpx;
    .rtitle{
      margin-top: 0;
      color: #fff;
      margin-bottom: 18rpx;
    }
    .reason-bar{
      width: 40rpx;
      height: 2rpx;
      background: #FFFFFF;
      margin: 0 auto;
    }
    .reason-stitle{
      font-size: 26rpx;
      color: #fff;
      opacity: 0.8;
      margin-top: 27rpx;
      margin-bottom: 49rpx;
    }
    .reason-swiper{
      width: 100%;
      height: 700rpx;
      .swiper-item{
        width: 100%;
        .reason-item-top{
          width: 100%;
          image{
            width: 100%;
          }
        }
        .reason-bottom{
          width: 100%;
          height: 306rpx;
          box-shadow: 0rpx 0rpx 12rpx 0rpx #E5E5E5;
          box-sizing: border-box;
          padding: 50rpx 15rpx;
          .reason-title{
            font-size: 34rpx;
            color: #121213;
            font-weight: 500;
            line-height: 34rpx;
            margin-bottom: 13rpx; 
          }
          .reason-english{
            font-size: 20rpx;
            line-height: 20rpx;
            color: #646464;
            margin-bottom: 22rpx;
          }
          .reason-desc{
            font-size: 32rpx;
            line-height: 42rpx;
            color: #646464;
            text-align: justify;
          }
        }
      }
    }
  }
  // 客户案例
  .select .select-list {
    width: 100%;
    height: 360rpx;
  
    .swiper-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;
  
      .select-item {
        width: 332rpx;
  
        .select-item-top {
          width: 100%;
          margin-bottom: 30rpx;
  
          image {
            width: 100%;
            height: 229rpx;
          }
        }
  
        text {
          font-size: 30rpx;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
</style>
