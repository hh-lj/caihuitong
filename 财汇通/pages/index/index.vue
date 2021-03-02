<template>
  <view class="body">
    <!--头部-->
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
    <!-- 通栏轮播 -->
    <view class="banner">
      <swiper class="swiper" autoplay="true" interval="3000" circular="true">
        <swiper-item v-for="(item,index) in list_banner" :key="index">
          <view class="swiper-item">
            <image :src="'http://www.cdcaihuitong.com'+item.image_url" mode=""></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 我们的服务 -->
    <view class="service">
      <view class="content">
        <view class="title-container">
          <text class="btitle">我们的服务</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">三十年财务经验的带头引领财会团队</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <view class="service-list">
          <view class="service-item">
            <view class="service-item-top">
              <image src="../../static/icon1.png" mode="widthFix"></image>
            </view>
            <text class="service-title">工商注册</text>
            <view class="service-bar"></view>
            <view class="service-desc">
              <text>一站式服务</text>
              <text>政策变化全掌握</text>
            </view>
            <button class="service-item-detail">查看详情</button>
          </view>
          <view class="service-item">
            <view class="service-item-top">
              <image src="../../static/icon2.png" mode="widthFix"></image>
            </view>
            <text class="service-title">代理记账</text>
            <view class="service-bar"></view>
            <view class="service-desc">
              <text>资深会计团队轻松</text>
              <text>搞定财会问题</text>
            </view>
            <button class="service-item-detail">查看详情</button>
          </view>
          <view class="service-item">
            <view class="service-item-top">
              <image src="../../static/icon3.png" mode="widthFix"></image>
            </view>
            <text class="service-title">税务筹划</text>
            <view class="service-bar"></view>
            <view class="service-desc">
              <text>合理筹划税务</text>
              <text>减少企业税负</text>
            </view>
            <button class="service-item-detail">查看详情</button>
          </view>
          <view class="service-item">
            <view class="service-item-top">
              <image src="../../static/icon4.png" mode="widthFix"></image>
            </view>
            <text class="service-title">资质办理</text>
            <view class="service-bar"></view>
            <view class="service-desc">
              <text>高效办理</text>
              <text>专业服务</text>
            </view>
            <button class="service-item-detail">查看详情</button>
          </view>
        </view>
        <view class="service-look">
          <button class="service-detail">查看更多服务</button>
        </view>
      </view>
    </view>
    <!-- 我们的团队 -->
    <view class="team">
      <view class="content">
        <view class="title-container">
          <text class="btitle">我们的团队</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">30年从业经验，服务国内多家知名企业</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <view class="team-list">
          <swiper class="team-swiper" autoplay="true" interval="3500" circular="true" indicator-dots="true"
            indicator-color="#666" indicator-active-color="#FF504D">
            <swiper-item v-for="(item,index) in list_team" :key="index">
              <view class="swiper-item">
                <image :src="'http://www.cdcaihuitong.com' + item.content_image_url" mode="widthFix"></image>
                <text class="team-title">{{item.content_title}}</text>
                <text class="team-desc">{{item.content_describe}}</text>
              </view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
    <!-- 分割线 -->
    <view class="cutline">
      <image class="cutline-img" src="../../static/part-bg.jpg" mode=""></image>
      <view class="content">
        <text class="cutline-title">经营企业,财税合规最重要</text>
        <view class="cutline-desc">
          <text>了解规则</text>
          <text>操作规范</text>
          <text>符合法规</text>
        </view>
      </view>
    </view>
    <!-- 他们，选择了我们 -->
    <view class="select">
      <view class="content">
        <view class="title-container">
          <text class="btitle">他们，选择了我们</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">因为专业，所以选择，因为选择，所以放心</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <swiper class="select-list" autoplay="true" interval="3100" circular="true" indicator-dots="true"
          indicator-color="#666" indicator-active-color="#FF504D">
          <swiper-item v-for="(item,index) in list_case" :key="index">
            <view class="swiper-item">
              <view class="select-item">
                <view class="select-item-top">
                  <image :src="'http://www.cdcaihuitong.com/' + item.content_image_url" mode=""></image>
                </view>
                <text>{{item.content_title}}</text>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 企业合规财税方案 -->
    <view class="scheme">
      <view class="content">
        <view class="title-container">
          <text class="btitle">企业合规财税方案</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">专业团队为您提供全方位解决方案</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <view class="sheme-nav-container">
          <view class="scheme-nav" :id="num==0 ? 'cur' : '' ">
            <view class="scheme-nav-item">初创企业</view>
          </view>
          <view class="scheme-nav" :id="num==1 ? 'cur' : '' ">
            <view class="scheme-nav-item">中小型企业</view>
          </view>
          <view class="scheme-nav" :id="num==2 ? 'cur' : '' ">
            <view class="scheme-nav-item">大型企业</view>
          </view>
        </view>
        <swiper class="scheme-swiper" :autoplay="true" :interval="3000" :duration="1000" :current="num" @change="schemeChange($event)">
          <swiper-item v-for="(item,index) in list_service" :key="index">
            <view class="swiper-item">
              <view class="scheme-top">
                <image :src=" 'http://www.cdcaihuitong.com/' + item.index_image_url" mode=""></image>
              </view>
              <text class="scheme-title">{{item.content_title}}</text>
              <text class="scheme-desc">{{item.content_describe}}</text>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 我们的优势 -->
    <view class="advantage">
      <view class="content">
        <view class="title-container">
          <text class="btitle">我们的优势</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">四大功能优势 降本增效更简单</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
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
    <!-- 证书展示 -->
    <view class="display">
      <view class="content">
        <view class="title-container">
          <text class="btitle">证书展示</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">专业的事情，交给专业的人去做</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <swiper autoplay="true" :interval="3000" :duration="1000" class="display-swiper">
          <swiper-item v-for="(item,index) in list_honner.slice(0,2)" :key="index">
            <view class="swiper-item">
              <image :src="'http://www.cdcaihuitong.com' + item.content_image_url" mode="widthFix"></image>
              <image :src="'http://www.cdcaihuitong.com' + item.content_image_url" mode="widthFix"></image>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 走进财惠通 -->
    <view class="about">
      <view class="content">
        <view class="title-container">
          <text class="btitle">走进财惠通</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">一站式服务平台，让企业经营更简单</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <view class="about-top">
          <image src="../../static/gongsi.jpg" mode="widthFix"></image>
        </view>
        <text class="about-title">成都财惠通企业管理咨询有限公司</text>
        <view class="about-desc">
          成都财惠通企业管理咨询有限公司是一家将财务管理咨询、金融融资咨询、企业工商管理咨询、建筑资质管理咨询多方有机结合的专业企业咨询服务机构，公司拥有从事财务咨询服务、金融融资咨询、工商管理咨询服务、建筑资质咨询服务多年的专业服务队伍。是专注于各类咨询及代理行内覆盖范围广、客户满意度高的咨询公司之一，公司自成立以来坚守专业价值，致力追求卓越始终秉承“信誉为本、共创共享”的服务宗旨....
        </view>
      </view>
    </view>
    <!-- 新闻 -->
    <view class="news">
      <view class="content">
        <view class="title-container">
          <text class="btitle">新闻资讯</text>
          <view class="stitle-container">
            <view class="stitle-bar"></view>
            <text class="stitle">快人一步掌握行业资讯</text>
            <view class="stitle-bar"></view>
          </view>
        </view>
        <view class="news-nav-container">
          <view class="news-nav" :id="index == 0 ? 'cur' : '' ">
            <navigator url="../news/news" open-type="switchTab">新闻资讯</navigator>
          </view>
          <view class="news-nav" :id="index == 1 ? 'cur' : '' ">
            <navigator url="../news/news" open-type="switchTab">政策解读</navigator>
          </view>
          <view class="news-nav" :id="index == 2 ? 'cur' : '' ">
            <navigator url="../news/news" open-type="switchTab">税务课堂</navigator>
          </view>
        </view>
        <swiper class="news-swiper" :autoplay="true" :interval="5000" :duration="1000" :current="index" @change="newsChange($event)">
          <swiper-item v-for="(item,index) in list_news" :key="index">
            <view class="swiper-item" v-for="(info,index) in item.document_list.slice(0,3)">
              <view class="news-left">
                <image :src="'http://www.cdcaihuitong.com'+ info.index_image_url" mode=""></image>
              </view>
              <view class="news-right">
                <text class="news-title">{{info.content_title}}</text>
                <text class="news-date">{{info.content_time | formatDate('-')}}</text>
                <text class="news-desc">{{info.wap_content_describe}}</text>
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
  import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
  import info from '../../components/info.vue'
  import uniIcons from "@/components/uni-icons/uni-icons.vue"
  export default {
    data() {
      return {
        index: 0,
        num: 0,
        list_banner: [],
        list_team: [],
        list_case: [],
        list_seo: [],
        list_service: [],
        list_honner: [],
        list_news: [],
        info_config: {}
      }
    },
    onLoad() {
      uni.request({
        url: this.$url + '/content/api/index',
        method: 'POST',
        success: (res) => {
          this.list_banner = res.data.data.list_banner,
            this.list_case = res.data.data.list_case,
            this.list_team = res.data.data.list_team,
            this.list_honner = res.data.data.list_honor,
            this.list_seo = res.data.data.list_seo,
            this.list_service = res.data.data.list_service,
            this.list_news = res.data.data.list_column_news,
            this.info_config = res.data.data.info_config,
            console.log(res)
        }
      })
    },
    methods: {
      open() {
        this.$refs.draw.open();
      },
      schemeChange(e) {
        this.num = e.detail.current;
      },
      newsChange(e) {
        this.index = e.detail.current;
      }
    },
    filters: {
      // 时间戳处理
      formatDate: function(value, spe = '/') {
        value = value * 1000
        let data = new Date(value);
        let year = data.getFullYear();
        let month = data.getMonth() + 1;
        let day = data.getDate();
        let h = data.getHours();
        let mm = data.getMinutes();
        let s = data.getSeconds();
        month = month > 10 ? month : "0" + month;
        day = day > 10 ? day : "0" + day;
        h = h > 10 ? h : "0" + h;
        mm = mm > 10 ? mm : "0" + mm;
        s = s > 10 ? s : "0" + s;
        return `${year}${spe}${month}${spe}${day}`;
      }
    },
    components: {
      uniDrawer,
      info,
      uniIcons
    }
  }
</script>

<style lang="scss">
  .content {
    padding-left: 30rpx;
    padding-right: 30rpx;
  }

  .body {
    padding-top: 120rpx;
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

  /* banner部分 */
  .banner .swiper {
    width: 750rpx;
    height: 470rpx;

    swiper-item {
      .swiper-item {
        width: 100%;
        height: 100%;

        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  /* 公共标题 */
  .title-container {
    margin-top: 70rpx;
    margin-bottom: 50rpx;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    .btitle {
      font-size: 40rpx;
      color: #1A1A1A;
      text-align: center;
      font-weight: bold;
      line-height: 40rpx;
      margin-bottom: 18rpx;
    }

    .stitle-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .stitle-bar {
        width: 50rpx;
        height: 2rpx;
        background-color: #FF504D;
      }

      .stitle {
        font-size: 26rpx;
        color: #555758;
        line-height: 26rpx;
        padding: 0 10rpx;
      }
    }
  }

  /* 我们的服务 */
  .service {
    .service-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .service-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 330rpx;
        height: 400rpx;
        padding: 34rpx;
        background: #FFFFFF;
        border: 1rpx solid #D5D5D5;
        margin-bottom: 50rpx;
        box-sizing: border-box;

        .service-item-top {
          width: 76rpx;
          height: 76rpx;
        }

        .service-item-top image {
          width: 100%;
        }

        .service-title {
          display: block;
          margin-top: 28rpx;
          margin-bottom: 28rpx;
          font-size: 32rpx;
          color: #333;
          font-weight: bold;
          line-height: 32rpx;
        }

        .service-bar {
          width: 27rpx;
          height: 1rpx;
          background: #FF504D;
        }

        .service-desc {
          margin-bottom: 25rpx;
          margin-top: 10rpx;
          letter-spacing: 1rpx;
        }

        .service-desc text {
          display: block;
          font-size: 26rpx;
          font-weight: 400;
          color: #666666;
          line-height: 39rpx;
          text-align: center;
        }

        .service-item-detail {
          width: 145rpx;
          height: 36rpx;
          border: none;
          outline: none;
          background: #FF504D;
          color: #fff;
          font-size: 20rpx;
          line-height: 36rpx;
          border-radius: 0;
          text-align: center;
          letter-spacing: 1rpx;
        }
      }
    }

    .service-detail {
      width: 170rpx;
      height: 43rpx;
      line-height: 43rpx;
      background-color: #F0F0F0;
      font-size: 16rpx;
      font-weight: 400;
      color: #666666;
      border-radius: 0;
    }
  }

  /* 我们的团队 */
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

  // 分割线
  .cutline {
    position: relative;
    width: 100%;
    height: 247rpx;
    box-sizing: border-box;

    .cutline-img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10;
    }

    .content {
      // width: 100%;
      position: absolute;
      top: 54rpx;
      z-index: 50;
      text-align: center;
    }

    .cutline-title {
      font-size: 59rpx;
      line-height: 59rpx;
      color: #fff;
      font-weight: bold;
      font-style: italic;
    }

    .cutline-desc {
      display: flex;
      justify-content: space-around;
      color: #fff;
      font-size: 27rpx;
      margin-top: 45rpx;
      line-height: 27rpx;
    }
  }

  // 选择
  .select .select-list {
    width: 100%;
    height: 630rpx;

    .swiper-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;

      .select-item {
        width: 100%;

        .select-item-top {
          width: 100%;
          margin-bottom: 30rpx;

          image {
            width: 100%;
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

  // 企业合规财税方案
  .scheme {
    .sheme-nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .scheme-nav {
        width: 230rpx;
        height: 70rpx;
        margin-bottom: 50rpx;
        box-sizing: border-box;
        border: 1rpx solid #E6E6E6;

        .scheme-nav-item {
          width: 100%;
          height: 100%;
          line-height: 70rpx;
          text-align: center;
          font-size: 30rpx;
          color: #333;
        }
      }

      #cur {
        border: none;
        background-color: #FF504D;

        .scheme-nav-item {
          color: #fff;
        }
      }
    }

    .scheme-swiper {
      width: 100%;
      height: 750rpx;
      background-color: #F5F5F5;

      .swiper-item {
        width: 100%;

        .scheme-top {
          width: 100%;
          height: 388rpx;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .scheme-title {
          display: block;
          font-size: 32rpx;
          font-weight: bold;
          color: #333;
          padding: 30rpx;
        }

        .scheme-desc {
          display: block;
          font-size: 28rpx;
          color: #666;
          line-height: 42rpx;
          padding: 0 30rpx 50rpx;
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

  // 证书展示
  .display .display-swiper {
    width: 100%;

    .swiper-item {
      display: flex;
      justify-content: space-between;

      image {
        width: 330rpx;
        display: block;
      }

    }
  }

  // 走进财惠通
  .about {
    .about-top {
      width: 100%;
    }

    .about-title {
      display: block;
      margin-top: 30rpx;
      font-size: 32rpx;
      color: #333;
      font-weight: bold;
      margin-bottom: 20rpx;
    }

    .about-desc {
      font-size: 28rpx;
      color: #666;
      line-height: 42rpx;
      text-align: justify;
    }
  }

  // 新闻
  .news {
    width: 100%;

    .news-nav-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50rpx;

      .news-nav {
        width: 230rpx;
        height: 70rpx;
        border: 1px solid #E6E6E6;
        box-sizing: border-box;

        navigator {
          text-align: center;
          font-size: 30rpx;
          color: #666;
          line-height: 70rpx;
        }
      }

      #cur {
        border: none;
        background-color: #FF504D;

        navigator {
          color: #fff;
        }
      }
    }

    .news-swiper {
      width: 100%;
      height: 730rpx;

      .swiper-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50rpx;
        height: 206rpx;

        .news-left {
          width: 306rpx;
          height: 100%;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .news-right {
          width: 335rpx;
          height: 100%;

          .news-title {
            display: block;
            font-size: 32rpx;
            color: #333;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 19rpx;
          }

          .news-date {
            display: block;
            margin-bottom: 20rpx;
            font-size: 24rpx;
            color: #999;
          }

          .news-desc {
            font-size: 28rpx;
            line-height: 42rpx;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>
