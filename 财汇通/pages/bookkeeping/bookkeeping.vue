<template>
  <view class="bookkeeping-body">
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
    <image class="bookkeeping-banner" src="../../static/bookkeeping/bookkeeping-banner.jpg" mode="widthFix"></image>
    <view class="crumbs">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > 代理记账</text>
      </view>
    </view>
    <!-- 找记账公司，以下四点很关键 -->
    <view class="key">
      <view class="content">
        <view class="rtitle">找记账公司，以下四点很关键</view>
        <view class="key-list">
          <view class="key-item">
            <view class="key-icon">
              <image src="../../static/bookkeeping/dl-bill1-r.png" mode="widthFix" style="width: 92rpx; margin-bottom: 42rpx;"></image>
            </view>
            <view class="key-desc">记账公司一定要合法</view>
          </view>
          <view class="key-item">
            <view class="key-icon">
              <image src="../../static/bookkeeping/dl-bill2-r.png" mode="widthFix" style="width: 81rpx; margin-bottom: 45rpx;"></image>
            </view>
            <view class="key-desc">熟悉相关政策法规，能帮助企业合法节税。</view>
          </view>
          <view class="key-item">
            <view class="key-icon">
              <image src="../../static/bookkeeping/dl-bill3-r.png" mode="widthFix" style="width: 87rpx; margin-bottom: 43rpx;"></image>
            </view>
            <view class="key-desc">记账公司的操作一定要规范</view>
          </view>
          <view class="key-item">
            <view class="key-icon">
              <image src="../../static/bookkeeping/dl-bill4-r.png" mode="widthFix" style="width: 68rpx; margin-bottom: 42rpx;"></image>
            </view>
            <view class="key-desc">承担风险的能力</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 财惠通财税成都市财政局批准的合法记账公司 -->
    <view class="legitimate">
      <view class="content">
        <view class="rtitle">
          <text>财惠通财税</text>
          <text>成都市财政局批准的合法记账公司</text>
        </view>
        <swiper class="legitimate-swiper" :autoplay="true" :interval="3000" :duration="1000" :current="index" @change="onChange($event)">
          <swiper-item>
            <view class="swiper-item">
              <image src="../../static/bookkeeping/dl-cht.jpg" mode="widthFix"></image>
              <view class="legitimate-bottom">
                <view class="legitimate-title">
                  <view class="btitle">正规企业</view>
                  <view class="stitle">enterprise</view>
                </view>
                <view class="legitimate-desc">成都市财政局颁发代理记账许可，正规经营企业，同时成都市代理记账协会会员单位。</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="../../static/bookkeeping/dl-cht.jpg" mode="widthFix"></image>
              <view class="legitimate-bottom">
                <view class="legitimate-title">
                  <view class="btitle">流程规范</view>
                  <view class="stitle">process</view>
                </view>
                <view class="legitimate-desc">三十年资深老会计带队做账，做账过程规范化操作，资料分类归档，结果、过程透明化，专人专户</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="../../static/bookkeeping/dl-cht.jpg" mode="widthFix"></image>
              <view class="legitimate-bottom">
                <view class="legitimate-title">
                  <view class="btitle">权威保障</view>
                  <view class="stitle">authority</view>
                </view>
                <view class="legitimate-desc">带队会计曾供职于政府财税部门，相关政策解读更精准，帮助企业合理合法节税，节约企业成本。</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="../../static/bookkeeping/dl-cht.jpg" mode="widthFix"></image>
              <view class="legitimate-bottom">
                <view class="legitimate-title">
                  <view class="btitle">担责保障</view>
                  <view class="stitle">responsibility</view>
                </view>
                <view class="legitimate-desc">签署保密协议，保护资料安全，同时，签订佩服协议，因我们做账导致的罚款，由我司承担。</view>
              </view>
            </view>
          </swiper-item>
        </swiper>
        <view class="legitimate-nav-contaiiner">
          <image src="../../static/bookkeeping/dl-cht-left.png" mode="widthFix" style="width: 19rpx;" @click="prev"></image>
          <view class="legitimate-nav" :id="index == 0 ? 'cur' : ''">
            <text>正规企业</text>
          </view>
          <view class="legitimate-nav" :id="index == 1 ? 'cur' : ''">
            <text>流程规范</text>
          </view>
          <view class="legitimate-nav" :id="index == 2 ? 'cur' : ''">
            <text>权威保障</text>
          </view>
          <view class="legitimate-nav" :id="index == 3 ? 'cur' : ''">
            <text>担责保障</text>
          </view>
          <image src="../../static/bookkeeping/dl-cht-right.png" mode="widthFix" style="width: 19rpx;" @click="next"></image>
        </view>
      </view>
    </view>
    <!-- 我们的团队 -->
    <view class="team">
      <view class="content">
        <view class="rtitle">我们的团队</view>
        <view class="team-list">
          <swiper class="team-swiper" autoplay="true" interval="3500" circular="true" indicator-dots="true"
            indicator-color="#666" indicator-active-color="#FF504D">
            <swiper-item>
              <view class="swiper-item">
                <image src="../../static/tuandui.jpg" mode="widthFix"></image>
                <text class="team-title">服务---源于优质团队</text>
                <text class="team-desc">
                  公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入...
                </text>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item">
                <image src="../../static/tuandui.jpg" mode="widthFix"></image>
                <text class="team-title">服务---源于优质团队</text>
                <text class="team-desc">
                  公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入...
                </text>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item">
                <image src="../../static/tuandui.jpg" mode="widthFix"></image>
                <text class="team-title">服务---源于优质团队</text>
                <text class="team-desc">
                  公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入...
                </text>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item">
                <image src="../../static/tuandui.jpg" mode="widthFix"></image>
                <text class="team-title">服务---源于优质团队</text>
                <text class="team-desc">
                  公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入...
                </text>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item">
                <image src="../../static/tuandui.jpg" mode="widthFix"></image>
                <text class="team-title">服务---源于优质团队</text>
                <text class="team-desc">
                  公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨，逐渐发展为具有强大品牌实力和广泛客户吸引力的综合性企业，不断吸纳众多人士的加入...
                </text>
              </view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
<!-- 客户案例-->
    <view class="select">
      <view class="content">
        <view class="rtitle">客户案例</view>
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
      next() {
        if (this.index < 3) {
          this.index = this.index + 1;
        }
      },
      prev() {
        if (this.index > 0) {
          this.index = this.index - 1;
        }
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

  .bookkeeping-banner {
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

  // 找记账公司，以下四点很关键
  .key .key-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    .key-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 330rpx;
      height: 308rpx;
      margin-bottom: 30rpx;
      box-sizing: border-box;
      padding: 50rpx 40rpx 30rpx;
      box-shadow: 0rpx 2rpx 11rpx 0rpx #F0F0F0;

      .key-desc {
        font-size: 28rpx;
        color: #171718;
        line-height: 42rpx;
        text-align: center;
      }
    }
  }

  // 财惠通财税成都市财政局批准的合法记账公司
  .legitimate {
    .rtitle text {
      display: block;
    }

    .legitimate-swiper {
      width: 100%;
      height: 670rpx;

      .swiper-item {
        width: 100%;

        image {
          width: 100%;
        }

        .legitimate-bottom {
          width: 100%;
          height: 255rpx;
          box-sizing: border-box;
          box-shadow: 0 2rpx 11rpx 0 #F0F0F0;
          padding: 49rpx 145rpx 20rpx 46rpx;

          .legitimate-title {
            display: flex;
            align-items: flex-end;
            margin-bottom: 25rpx;

            .btitle {
              font-size: 50rpx;
              line-height: 50rpx;
              color: #FF504D;
              letter-spacing: 2rpx;
            }

            .stitle {
              margin-left: 19rpx;
              text-transform: uppercase;
              font-size: 22rpx;
              line-height: 22rpx;
              color: #FF504D;
              opacity: 0.5;
              letter-spacing: 4rpx;
            }
          }

        }

        .legitimate-desc {
          font-size: 28rpx;
          line-height: 42rpx;
          text-align: justify;
          color: #4D4D4D;
        }
      }
    }

    .legitimate-nav-contaiiner {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .legitimate-nav {
        width: 124rpx;
        height: 139rpx;
        background: url(../../static/bookkeeping/dl-cht-g.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        box-sizing: border-box;
        padding: 30rpx;
        text-align: center;

        text {
          font-size: 30rpx;
          color: #888;
          line-height: 45rpx;
        }
      }

      #cur {
        background: url(../../static/bookkeeping/dl-cht-r.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;

        text {
          color: #fff;
        }
      }
    }
  }
// 团队
.team .team-list .team-swiper {
    width: 100%;
    height: 960rpx;
    margin-bottom: 70rpx;

    swiper-item {
      width: 100%;
      height: 100%;

      image {
        width: 100%
      }

      .team-title {
        display: block;
        margin-top: 50rpx;
        margin-bottom: 30rpx;
        font-size: 34rpx;
        color: #333;
        font-weight: bold;
      }

      .team-desc {
        font-size: 28rpx;
        color: #666;
        line-height: 42rpx;
        text-align: justify;
      }
    }
  }
  // 客户案例
  .select .select-list {
    width: 100%;
    height: 350rpx;

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
