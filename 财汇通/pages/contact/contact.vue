<template>
  <view class="contact-body">
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
                <navigator url="../audit/audit" >
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
  <image :src="'http://www.cdcaihuitong.com'+ info_banner.banner" mode="widthFix" class="page-banner"></image>
  <view class="crumbs" v-for="(item,index) in list_breadcrumb" :key="index">
    <view class="content">
      <view class="crumbs-bar"></view>
      <text>您的位置 > {{item.name}}</text>
    </view>
  </view>
    <!-- 联系财惠通 -->
    <view class="contact">
      <view class="content">
      <text class="contact-title">联系财惠通</text>
      <view class="contact-desc">{{info_seo.web_site_description}}
      </view>
      <view class="contact-list">
        <view class="contact-item">
          <view class="contact-left">
            <image src="../../static/contact/lx-dh.png" mode="widthFix"></image>
          </view>
          <view class="contact-right">
            <view class="contact-item-title">公司电话</view>
            <view class="contact-item-desc">{{info_config.web_site_tel}}</view>
          </view>
        </view>
        <view class="contact-item">
          <view class="contact-left">
            <image src="../../static/contact/lx-sj.png" mode="widthFix"></image>
          </view>
          <view class="contact-right">
            <view class="contact-item-title">手机号码</view>
            <view class="contact-item-desc">{{info_config.web_site_mobile}}</view>
          </view>
        </view>
        <view class="contact-item">
          <view class="contact-left">
            <image src="../../static/contact/lx-QQ.png" mode="widthFix"></image>
          </view>
          <view class="contact-right">
            <view class="contact-item-title">企业邮箱</view>
            <view class="contact-item-desc">{{info_config.web_site_mail}}</view>
          </view>
        </view>
        <view class="contact-item">
          <view class="contact-left">
            <image src="../../static/contact/lx-dz.png" mode="widthFix"></image>
          </view>
          <view class="contact-right">
            <view class="contact-item-title">公司地址</view>
            <view class="contact-item-desc">{{info_config.web_site_address1}}</view>
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
  export default{
    data(){
      return{
      info_config:{},
      info_banner: {},
       list_breadcrumb: [],
       info_seo:{}
      }
    },
  onLoad() {
    uni.request({
      url:this.$url+'/content/api/getColumn?id=93',
      method:'POST',
      success: (res) => {
        console.log(res),
        this.list_breadcrumb = res.data.data.list_breadcrumb,
        this.info_banner = res.data.data.info_banner,
           this.info_config = res.data.data.info_config,
           this.info_seo = res.data.data.info_seo
      }
    })
  },
    methods:{
      open() {
      				this.$refs.draw.open();
      			},
    },
    components:{
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
  .page-banner{
    margin-top: 120rpx;
    width: 100%;
  }
  .crumbs{
         width: 100%;
         height: 54rpx;
         border-bottom: 1px dashed #DCDCDC ;
         .content{
           display: flex;
           align-items: center;
           height: 100%;
           .crumbs-bar{
             width: 5rpx;
             height: 12rpx;
             background-color: #FF504D;
             margin-right: 15rpx;
           }
           text{
             font-size: 18rpx;
             color: #666;
           }
         }
   
}
  // 联系我们
  .contact{
    width: 100%;
    padding-bottom: 60rpx;
    .contact-title{
      display: block;
      font-size: 34rpx;
      color: #333;
      margin-top: 65rpx;
      margin-bottom: 45rpx;
      text-align: center;
    }
    .contact-desc{
      font-size: 28rpx;
      color: #666;
      line-height: 42rpx;
      text-align: justify;
    }
    .contact-list{
      margin-top: 45rpx;
      width: 100%;
      .contact-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 171rpx;
        border: 1px solid #EFEFEF;
        margin-top: 30rpx;
        border-radius: 10rpx;
        box-sizing: border-box;
        padding: 35rpx;
        .contact-left{
          width: 54rpx;
          height: 54rpx;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .contact-right{
          width: 530rpx;
          .contact-item-title{
            font-size: 32rpx;
            color: #333;
            line-height: 32rpx;
            display: block;
            // margin-bottom: 20rpx;
          }
          .contact-item-desc{
            font-size: 28rpx;
            color: #666;
            line-height: 42rpx;
          }
        }
      }
    }
  }
</style>
