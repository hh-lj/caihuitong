<template>
	<view class="foot-b" >
    <navigator url="/sitemap.xml">
			<view class="map">
				网站地图
			</view>
			</navigator>
		<view class="middle">
      <view>
        技术支持：盈源科技
      </view>
			<view>
				备案号: {{info_config.web_site_icp}}
			</view>
			<view>
				{{info_config.web_site_copyright}}  版权所有
			</view>
			<view class="tel">
				联系电话: {{info_config.web_site_tel}} {{info_config.web_site_mobile}}
			</view>
			<view class="address">
				公司地址: {{info_config.web_site_address1}}
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		props: {
			info_config:{}
		},
		data() {
			return {
				current: 0,
				index: 0,
				num: 0,									
			}
		},			
		methods: {
			
		},		
	}
	
</script>

<style lang="scss">
	.foot-b {
    box-sizing: border-box;
    padding:  70rpx 20rpx 50rpx;
		width: 100%;			
		background: #F1EFEE;
    text-align: center;
			.map {
				margin: 0 58rpx;				
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
				line-height: 24rpx;
        margin-bottom: 20rpx;
			}
		.middle {	
			view {
				margin-bottom: 28rpx;
				font-size: 24rpx;
				color: #666666;
				line-height: 24rpx;
				text-align: center;
			}
			.address {
			line-height: 30rpx;
			}
			
		}		
	}
</style>
