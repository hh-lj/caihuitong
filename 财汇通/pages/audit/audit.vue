<template>
  <view class="audit-body">
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
    <image class="page-banner" src="../../static/audit/sj-banner.jpg" mode="widthFix"></image>
    <view class="crumbs">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > 财务审计</text>
      </view>
    </view>
    <!-- 审计评估 -->
    <view class="about">
      <view class="content">
        <view class="about-top">
          <image src="../../static/audit/sj.jpg" mode="widthFix"></image>
        </view>
        <view class="about-title">审计评估</view>
        <view class="about-desc">
          <view>一、财务报表审计：</view>
          <view>(1)全年报表审计 (2)一季度报表审计 (3)半年报表审计 (4)前三季度报表审计</view>
          <view>二、专项审计：</view>
          <view>(1)合并、分立、清算审计 (2)经济责任审计 (3)改制审计 (4)财务收支审计 (5)涉及经济案件审计 (6)基本建设工程决算审核 (7)其他审计及鉴证业务</view>
          <view>三、资产评估：</view>
          <view>即资产价值形态的评估。是指专门的机构或专门评估人员，遵循法定或公允的标准和程序，运用科学的方法，以货币作为计算权益的统一尺度，对在一定时点上的资产进行评定估算的行为。</view>
        </view>
      </view>
    </view>
    <!-- 税审报告 -->
    <view class="about">
      <view class="content">
        <view class="rtitle">服务内容</view>
        <view class="about-top">
          <image src="../../static/audit/sj-bg.jpg" mode="widthFix"></image>
        </view>
        <view class="about-title">税审报告：</view>
        <view class="about-desc">
          <view>税审报告是作给税务局看的，是用来做年度所得税汇算清缴依据的。因为《税法》和会计准则是有差异的，有些收入支出基于会计准则是对的，但是在《税法》来讲必须调出来，这样一来利润表负债表就改变了。</view>
          <view>01、企业当年亏损较大，以后年度需要弥补亏损的，则当年度需要出具税审报告</view>
          <view>02、企业帐务处理可能有问题，企业不放心，也会选择税务师事务所出税审报告</view>
          <view>03、企业会计核算没有问题，但当年增值税税负较低，可能会引起税务机关的关注，此时企业可以考虑出税审报告</view>
          <view>04、企业三年连续亏损，税务局通知企业出具三年的税审报告，因受纳税评估约谈等等原因，税务局通知企业出税审报告</view>
          <view>05、企业当年有利润，但利润太低，与收入和资产不配比，或企业有较多的逃税行为，为了税务安全，怕被税务检查，会主动选择做税审</view>
          <view>06、企业当年有利润，如果需要弥补以前年度的亏损，则弥补亏损的当年及至以前年度有亏损需弥补的年度中间的每一年均需出税审报告</view>
        </view>
      </view>
    </view>
 <!-- 准备材料 -->
    <view class="prepare">
      <view class="content">
        <view class="rtitle">准备资料</view>
        <view class="prepare-list">
          <image src="../../static/audit/sj-zl.jpg" mode="widthFix"></image>
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
