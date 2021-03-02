<template>
  <view class="make-body">
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
    <image class="page-banner" src="../../static/make/bm.jpg" mode="widthFix"></image>
    <view class="crumbs">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > 在线报名</text>
      </view>
    </view>
   
    <view class="make-list">
      <view class="content">
        <form @submit="submit($event)" @reset="">
        <view class="make-item">
          <text><text class="red">*</text>公司名称</text>
          <input type="text" value="" name="公司名称" placeholder="请填写公司名称" />
        </view>
        <view class="make-item">
          <text><text class="red">*</text>联系电话</text>
          <input type="text" value="" name="联系电话" placeholder="请填写联系电话" />
        </view>
        <view class="make-item">
          <text><text class="red">*</text>联系人名</text>
          <input type="text" value="" name="联系人" placeholder="请填写联系人" />
        </view>
        <view class="make-submite-container">
          <button class="cur" form-type="submit">提交</button>
          <button form-type="reset">重填</button>
        </view>
      </form>
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
        index: 0
      }
    },
    methods: {
      open() {
        this.$refs.draw.open();
      },
      onChange(e) {
        this.index = e.detail.current
      },
      submit(e){
       var formdata = e.detail.value;
       uni.showModal({
         content:'表单的数据为：'+JSON.stringify(formdata),
         showCancel:false
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

  // 表格
  .make-list {
    width: 100%;
padding-bottom: 20rpx;
    .make-item {
      margin-top: 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      text {
        font-size: 28rpx;
        color: #333;
        line-height: 28rpx;
        letter-spacing: 5rpx;

        .red {
          color: #FF504D;
        }
      }

      input {
        border: 1px solid #DCDCDC;
        width: 530rpx;
        height: 50rpx;
        box-sizing: border-box;
        padding-left: 20rpx;
        font-size: 28rpx;
        border-radius: 10rpx;
      }
    }
    .make-submite-container{
      display: flex;
      justify-content: center;
      margin-top: 50rpx;
      button{
        border: none;
        width: 150rpx;
        height: 50rpx;
        line-height: 50rpx;
        font-size: 20rpx;
        color: #666;
        letter-spacing: 5rpx;
        background-color: #dedede;
        margin-right: 20rpx;
        margin-left: 0;
      }
      .cur{
        background-color: #FF504D;
        color: #fff;
      }
    }
  }
</style>
