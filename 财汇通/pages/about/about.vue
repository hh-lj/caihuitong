<template>
  <view class="about-body">
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
                <navigator url="../about/about">
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
  <!-- 关于财惠通 -->
    <view class="about">
      <view class="content">
        <view class="page-title">
          <text class="btitle">关于财惠通</text>
          <text class="stitle">About Caihui Tong</text>
        </view>
        <view class="about-top">
          <image src="../../static/about/qiye.jpg" mode=""></image>
        </view>
        <view class="about-title">成都财惠通企业管理咨询有限公司</view>
        <view class="about-desc">
          成都财惠通企业管理咨询有限公司是一家将工商管理咨询、财务咨询、资质许可咨询、金融融资咨询多方有机结合的专业企业咨询服务机构，公司拥有从事工商管理咨询服务、财务咨询服务、资质许可咨询服务、金融融资咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“服务中小企业、扶持大学生创业及困难群体创业”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入，为企业提供更快捷、更高效、更贴心的一站式服务。
        </view>
      </view>
  </view>
  <!-- 企业实力 -->
  <view class="strength">
    <view class="content">
      <view class="page-title">
        <text class="btitle">企业实力</text>
        <text class="stitle">Company Strength </text>
      </view>
      <view class="strength-img">
        <image src="../../static/about/gy-qy.png" mode="widthFix"></image>
      </view>
    </view>
  </view>
  <!-- 证书展示 -->
  <view class="display">
    <view class="content">
      <view class="page-title">
       <text class="btitle">证书展示</text>
       <text class="stitle">Certificate Showing</text>
      </view>
      <swiper autoplay="true" :interval="3000" :duration="1000" class="display-swiper">
        <swiper-item>
          <view class="swiper-item">
            <image src="../../static/display-img1.jpg" mode="widthFix"></image>
            <image src="../../static/display-img2.jpg" mode="widthFix"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="../../static/display-img1.jpg" mode="widthFix"></image>
            <image src="../../static/display-img2.jpg" mode="widthFix"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
  <!-- 企业文化 -->
  <view class="culture">
    <view class="content">
      <view class="culture-img">
        <image src="../../static/about/gy-wh.jpg" mode="widthFix"></image>
      </view>
      <view class="culture-title">
        <text class="btitle">企业文化</text>
        <text class="stitle">助力企业财税合规整体解决方案</text>
      </view>
      <view class="culture-list">
        <view class="culture-item">
          <view class="culture-item-top">
            <image src="../../static/about/gy-wh-zz.png" mode="widthFix"  style="width: 43rpx;margin-right: 21rpx;"></image>
            <text>企业宗旨</text>
          </view>
          <view class="culture-desc">服务中小企业、扶持大学生创业及困难群体创业</view>
        </view>
        <view class="culture-item">
            <view class="culture-item-top">
              <image src="../../static/about/gy-wh-ln.png" mode="widthFix" style="width: 27rpx;margin-right: 27rpx"></image>
              <text>企业理念</text>
            </view>
            <view class="culture-desc">以网络平台为基础发展区域代理</view>
          </view>
        <view class="culture-item">
            <view class="culture-item-top">
              <image src="../../static/about/gy-wh-mb.png" mode="widthFix" style="width: 36rpx;margin-right: 23rpx"></image>
              <text>企业目标</text>
            </view>
            <view class="culture-desc">立足本地、面向全川、展望全国</view>
          </view>
        <view class="culture-item">
            <view class="culture-item-top">
              <image src="../../static/about/gy-wh-jzg.png" mode="widthFix" style="width: 32rpx;margin-right: 26rpx"></image>
              <text>企业价值观</text>
            </view>
            <view class="culture-desc">做好财税服务工作，不忘社会责任感</view>
        </view>
      </view>
    </view>
  </view>
   <info :info_config="info_config"></info>
  </view>
</template>

<script>
  import uniDrawer from "../../components/uni-drawer/uni-drawer.vue"
  import uniIcons from "../../components/uni-icons/uni-icons.vue"
  import info from "../../components/info.vue"
  export default{
    data(){
      return{
      info_config:{},
      info_banner: {},
       list_breadcrumb: []
      }
    },
    onLoad() {
      uni.request({
        url:this.$url+'/content/api/getColumn?id=92',
        method:'POST',
        success: (res) => {
          console.log(res),
          this.list_breadcrumb = res.data.data.list_breadcrumb,
          this.info_banner = res.data.data.info_banner,
             this.info_config = res.data.data.info_config
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
// 公共标题
.page-title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 69rpx;
  margin-bottom: 50rpx;
  width: 100%;
  .btitle{
    display: block;
    font-size: 34rpx;
    line-height: 34rpx;
    margin-bottom: 20rpx;
    color: #333;
  }
  .stitle{
    display: block;
    font-size: 20rpx;
    color: #B3B3B3;
    line-height: 20rpx;
  }
}
// 关于财惠通
.about{
  width: 100%;
  .about-top{
    width: 100%;
    margin-bottom: 31rpx;
    image{
      width: 100%;
    }
  }
  .about-title{
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 17rpx;
  }
  .about-desc{
    font-size: 28rpx;
    color: #666;
    line-height: 42rpx;
    text-align: justify;
    text-indent: 2em;
  }
}
// 企业实力
.strength .strength-img{
  width: 100%;
  image{
    width: 100%;
  }
}
 // 证书展示
  .display .display-swiper {
    width: 100%;

    .swiper-item {
      display: flex;
      justify-content: space-between;

      image {
        width: 330rpx;
      }
    }
  }
// 企业文化
.culture{
  width: 100%;
  padding-bottom: 70rpx;
  .culture-img image{
    width: 100%;
  }
  .culture-title{
    margin-top: 50rpx;
    margin-bottom: 8rpx;
   .btitle{
     display: block;
     font-weight: bold;
     font-size: 32rpx;
     margin-bottom: 22rpx;
     line-height: 32rpx;
   }
   .stitle{
     display: block;
     font-size: 28rpx;
     color: #666;
     line-height: 28rpx;
   }
  }
  .culture-item{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 208rpx;
    margin-top: 32rpx;
    border: 1rpx solid #EEEEEE;
    box-sizing: border-box;
    padding: 39rpx;
    .culture-item-top{
      display: flex;
      align-items: center;
      width: 100%;
     text{
       font-size: 30rpx;
       color: #333;
       font-weight: bold;
       display: block;
       letter-spacing: 2rpx;
     }
    }
    .culture-desc{
      font-size: 28rpx;
      color: #666;
      line-height: 42rpx;
    }
  }
}
</style>
