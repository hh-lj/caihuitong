<template>
  <view class="permission-body">
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
              <navigator url="../about/about"  open-type="switchTab">
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
    <image class="page-banner" src="../../static/handle/handle-banner.jpg" mode="widthFix"></image>
    <view class="crumbs">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > 资质办理</text>
      </view>
    </view>
    <!-- 资质代办 -->
    <view class="about">
      <view class="content">
        <view class="about-top">
          <image src="../../static/handle/zz.jpg" mode="widthFix"></image>
        </view>
        <view class="about-title">资质代办</view>
        <view class="about-desc">
          建筑公司整体转让、新办、建筑资质办理、房地产开发资质/工程设计资质、工程勘察资质、设计与施工一体化资质、城市规划编制资质。承包资质、劳务资质、房地产开发资质、物业资质、建筑装饰装修工程设计与施工资质、资质升级、增项、安全生产许可证、许可代理、压力管道施工、设计许可。
        </view>
      </view>
    </view>
    <!-- 资质类 -->
    <view class="qualification">
      <view class="content">
        <view class="rtitle">资质类</view>
        <swiper class="qualification-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
          indicator-color="#B3B3B3" indicator-active-color="#FF504D">
          <swiper-item>
            <view class="swiper-item" style="border-bottom: 1rpx solid #F49F45;">
              <view class="qualification-item-top">
                <image src="../../static/handle/zz-zz1.png" mode=""></image>
                <text>施工总承包资质</text>
              </view>
              <view class="qualification-desc">
                <view>建筑工程施工总承包</view>
                <view>公路工程总承包</view>
                <view>港口与航道工程总承包</view>
                <view>水利水电工程总承包</view>
                <view>市政公用工程总承包</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item" style="border-bottom: 1rpx solid #6E7CFE;">
              <view class="qualification-item-top">
                <image src="../../static/handle/zz-zz2.png" mode=""></image>
                <text>专业承包资质</text>
              </view>
              <view class="qualification-desc">
                <view>建筑装修装饰工程专业承包</view>
                <view>建筑机电工程专业承包</view>
                <view>铁路电务电气化工程专业承包</view>
                <view>模版脚手架（不分等级）</view>
                <view>防水防腐保温工程专业承包</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item" style="border-bottom: 1rpx solid #14CCC7;">
              <view class="qualification-item-top">
                <image src="../../static/handle/zz-zz3.png" mode=""></image>
                <text>专业作业资质</text>
              </view>
              <view class="qualification-desc">
                <view>专业作业资质（不分等级）</view>
                <view>安全生产许可证</view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item" style="border-bottom: 1rpx solid #FF5F60;">
              <view class="qualification-item-top">
                <image src="../../static/handle/zz-zz4.png" mode=""></image>
                <text>综合及房地产资质</text>
              </view>
              <view class="qualification-desc">
                <view>房地产开发企业资质</view>
                <view>房地产开发企业资质</view>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 许可类 -->
    <view class="permission">
      <view class="content">
        <view class="rtitle">许可类</view>
        <view class="permission-list">
          <view class="permission-icon">
            <image src="../../static/handle/premission.jpg" mode="widthFix"></image>
          </view>
        </view>
      </view>
    </view>
    <!-- 准备材料 -->
    <view class="prepare">
      <view class="content">
        <view class="rtitle">准备资料</view>
        <view class="prepare-list">
          <image src="../../static/handle/prepare-img.jpg" mode="widthFix"></image>
          <view class="prepare-item">
            <view class="prepare-num">1</view>
            <view class="prepare-desc">报告年度3、6、9、12月份的资产负债表、利润表</view>
          </view>
          <view class="prepare-item">
            <view class="prepare-num">2</view>
            <view class="prepare-desc">全年总账</view>
          </view>
          <view class="prepare-item">
            <view class="prepare-num">3</view>
            <view class="prepare-desc">全年明细账</view>
          </view>
          <view class="prepare-item">
            <view class="prepare-num">4</view>
            <view class="prepare-desc">全年科目余额表</view>
          </view>
          <view class="prepare-item">
            <view class="prepare-num">5</view>
            <view class="prepare-desc">营业执照扫描件</view>
          </view>
          <view class="prepare-item">
            <view class="prepare-num">6</view>
            <view class="prepare-desc">实名登录账号密码</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 我们的优势 -->
    <view class="advantage">
      <view class="content">
        <view class="rtitle">我们的优势</view>
        <view class="advantage-list">
          <view class="advantage-item">
            <view class="advantage-item-top">
              <image src="../../static/ziyuan.png" mode="widthFix"></image>
            </view>
            <text class="advantage-title">资源优势</text>
            <view class="advantage-desc">财税部门及会计师事务所任职经验，多家知名会计师事务所、评估事务所、税务事务所长期稳定合作。市财政局批准成立的合法机构。与全国大部分税收洼地有良好合作关系，帮助企业合法合规节税。政策解读、办理流程更熟悉，为您省时省力</view>
          </view>
          <view class="advantage-item">
            <view class="advantage-item-top">
              <image src="../../static/jingyan.png" mode="widthFix"></image>
            </view>
            <text class="advantage-title">经验优势</text>
            <view class="advantage-desc">30年行业经验，众多知名集团企业财税审计顾问，做账、节税、审计经验丰富。专业技能强，各种财税疑难杂症处理更得心应手</view>
          </view>
          <view class="advantage-item">
            <view class="advantage-item-top">
              <image src="../../static/fuwu.png" mode="widthFix"></image>
            </view>
            <text class="advantage-title">服务优势</text>
            <view class="advantage-desc">从业人员均经过系统培训，同时每个环节做好客户提醒与材料归档，服务流程透明化，让客户时刻感知每一项服务，做账报税更放心</view>
          </view>
          <view class="advantage-item">
            <view class="advantage-item-top">
              <image src="../../static/td.png" mode="widthFix"></image>
            </view>
            <text class="advantage-title">团队优势</text>
            <view class="advantage-desc">30年资深老会计带队，高级会计师服务，严格把控审核每一个项目，确保项目无误，同时实行一对一服务制，更精准快捷的为客户做好服务</view>
          </view>
        </view>
        <button class="advantage-learn">立即咨询</button>
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

  // 标题
  .rtitle {
    font-size: 40rpx;
    color: #333;
    font-weight: bold;
    margin-top: 66rpx;
    margin-bottom: 50rpx;
    text-align: center;
  }

  // 资质代办
  .about {
    width: 100%;

    .about-top {
      width: 100%;
      margin-bottom: 31rpx;
      margin-top: 67rpx;

      image {
        width: 100%;
      }
    }

    .about-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 17rpx;
    }

    .about-desc {
      font-size: 28rpx;
      color: #666;
      line-height: 42rpx;
      text-align: justify;
    }
  }

  // 资质类
  .qualification .qualification-swiper {
    width: 100%;
    height: 490rpx;

    .swiper-item {
      width: 516rpx;
      height: 398rpx;
      box-shadow: 0 0 12rpx 0 #F0f0f0;
        margin: 0 auto;
      .qualification-item-top {
        width: 100%;
        height: 80rpx;
        position: relative;
        z-index: 10;

        image {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
        }

        text {
          display: block;
          font-size: 32rpx;
          line-height: 32rpx;
          color: #fff;
          font-weight: bold;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 20;
          letter-spacing: 2rpx;
        }
      }
      .qualification-desc{
        width: 100%;
        height: 318rpx;
        box-sizing: border-box;
        padding-top: 41rpx;
        text-align: center;
        font-size: 28rpx;
        color: #666;
        line-height: 42rpx;
      }
    }
  }

// 许可类
.permission-list{
  width: 100%;
  .permission-icon{
    width: 100%;
    image{
      width: 100%;
    }
  }
}
// 准备材料
.prepare{
  width: 100%;
  .prepare-list{
    width: 100%;
    image{
      width: 100%;
      display: block;
      margin-bottom: 50rpx;
    }
    .prepare-item{
      display: flex;
      margin-top: 20rpx;
      width: 100%;
      height: 65rpx;
      .prepare-num{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54rpx;
        height: 100%;
        background-color:#FF504D;
        font-size: 42rpx;
        color: #fff;
      }
      .prepare-desc{
        width: 636rpx;
        height: 100%;
        box-sizing: border-box;
        padding-left: 15rpx;
        background-color: rgba(255, 80, 77, 0.1);
        line-height: 65rpx;
        font-size: 28rpx;
        color: #333;
      }
    }
  }
}
  // 我们的优势
  .advantage {
    width: 100%;

    .advantage-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 50rpx;
      margin-bottom: 30rpx;

      .advantage-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 330rpx;
        height: auto;
        margin-bottom: 50rpx;
        border-radius: 10rpx;
        box-sizing: border-box;
        padding: 50rpx 35rpx;
        box-shadow: 0rpx 0rpx 6rpx 0rpx #999;

        .advantage-item-top {
          width: 60rpx;
          height: 60rpx;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .advantage-title {
          display: block;
          font-size: 32rpx;
          color: #333;
          font-weight: bold;
          margin-top: 29rpx;
          margin-bottom: 25rpx;
        }

        .advantage-desc {
          font-size: 28rpx;
          color: #666;
          line-height: 42rpx;
          text-align: justify;
        }
      }
    }

    .advantage-learn {
      margin: 0 auto;
      width: 170rpx;
      height: 50rpx;
      line-height: 50rpx;
      border-radius: 0;
      border: none;
      outline: none;
      background-color: #FF504D;
      color: #fff;
      font-size: 16rpx;
      letter-spacing: 1rpx;
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
