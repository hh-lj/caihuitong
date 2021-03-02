<template>
  <view class="case-body">
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
    <view class="crumbs" v-for="(item,index) in list_breadcrumb.slice(0,1)" :key="index">
      <view class="content">
        <view class="crumbs-bar"></view>
        <text>您的位置 > {{item.name}}</text>
      </view>
    </view>

    <view class="case-list">
      <view class="content">
        <view class="case-nav">
          <navigator  v-for="(item,index) in list_column_same" :key="index" :url="'http://www.cdcaihuitong.com' + item.url" :class="{'active':current==index}" @click="addClass(index)">
            <view class="drawer-item">
            {{item.name}}
            </view>
          </navigator>
         <!-- <navigator url="../case/programme">
            <view class="drawer-item">
              合规节税方案
            </view>
          </navigator> -->
        </view>
        <view class="case">
          <view class="case-item" v-for="(item,index) in list_document.data" :key="index">
            <view class="case-item-left">
              <image :src="'http://www.cdcaihuitong.com'+item.index_image_url"></image>
            </view>
            <view class="case-item-right">
              <view class="case-item-title">{{item.title}}</view>
              <view class="case-item-desc">{{item.pc_content_describe}}</view>
              <navigator :url="'http://www.cdcaihuitong.com'+item.document_url">【查看详情】</navigator>
            </view>
          </view>
          <uni-pagination @change="handlePage" show-icon="true" :total="postCount"
            :current="pageNum"
            :pageSize="pageSize"></uni-pagination>
        </view>
      </view>
    </view>
    <info :info_config="info_config"></info>
  </view>
</template>

<script>
  import uniDrawer from "../../components/uni-drawer/uni-drawer.vue"
  import info from "../../components/info.vue"
  import uniPagination from "../../components/uni-pagination/uni-pagination.vue"
  export default {
    data() {
      return {
        info_config: {},
        info_banner: {},
        list_breadcrumb: [],
        list_document: {},
        list_column_same: [],
        postCount: '',
        pageSize:'6',
        pageNum: '1',
        list:[],
        current:''

      }
    },
    onLoad() {
      uni.request({
        url: this.$url + '/content/api/getColumn?id=104',
        method: 'POST',
        success: (res) => {
          console.log(res),
            this.list_breadcrumb = res.data.data.list_breadcrumb,
            this.info_banner = res.data.data.info_banner,
            this.list_document = res.data.data.list_document,
            this.list_column_same = res.data.data.list_column_same,
            this.postCount = res.data.data.list_document.total,
            this.pageNum = res.data.data.list_documen.current_page,
            this.list = res.data.data.list_documen.data,
          this.info_config = res.data.data.info_config
        }
       
      })
    },
    methods: {
      open() {
        this.$refs.draw.open()
      },
     handlePage(params){
                 var pageIndex = params.current;
                 console.log("this.pageNum:"+pageIndex);
                 this.getPostListInfo(pageIndex)
             },
             addClass(index){
               this.current=index;
             }
    },
    components: {
      info,
      uniDrawer,
      uniPagination
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

  // 
  .case-list {
    width: 100%;
    margin-top: 40rpx;

    .case-nav {
      margin-bottom: 60rpx;
      display: flex;
      justify-content: space-around;

      navigator {
        display: block;
        min-width: 150rpx;
        height: 70rpx;
        padding: 0 10rpx;
        text-align: center;
        line-height: 70rpx;
        background-color: #E6E6E6;

        .drawer-item {
          font-size: 30rpx;
          color: #666;
        }
      }

      .active {
        background-color: #FF504D;

        .drawer-item {
          color: #fff;
        }
      }
    }

    .case-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 222rpx;
      box-sizing: border-box;
      padding: 30rpx;
      border: 1rpx solid #DEDEDE;
      margin-bottom: 40rpx;

      .case-item-left {
        width: 202rpx;
        height: 162rpx;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .case-item-right {
        width: 380rpx;

        .case-item-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 32rpx;
          color: #333;
          font-weight: bold;
          line-height: 32rpx;
          margin-bottom: 25rpx;
        }

        .case-item-desc {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 26rpx;
          color: #666;
          line-height: 39rpx;
        }

        text {
          font-size: 26rpx;
          color: #FF504D;
          line-height: 26rpx;
        }
      }
    }
  }
</style>
