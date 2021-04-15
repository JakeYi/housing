<template>
  <div class="container ub-box ub-col ub-ver">
	<scroll-view scroll-y style="height: 100vh" scroll-top="0">
	  <dl class="ub-box ub-col">
		<!-- 轮播 -->
		<div class="z-bg-color-fff">
			<swiper class="swiper" indicator-dots="false" autoplay="false" interval="5000" duration="500">
			<block v-for="(item, indx) in imgUrls" :key="indx">
				<swiper-item>
				<image @click.stop="previewImage(indexImg,indx)" :src="item" class="z-width-100-percent" mode="widthFix"/>
				</swiper-item>
			</block>
			</swiper>
    	</div>
		<!-- 轮播 -->
		<div>
			<span
          class="z-width-90-percent z-font-size-22 z-lineHeight-25 z-lines-2-overflow-hidden z-font-weight-bold z-padding-all-15-px"
          >{{ good.mainTitle }}</span>
		</div>
		<div class="z-width-100-percent ub-box ub-ver-h">
			<div class="ub-box z-margin-v-5-px z-padding-top-30-px z-width-90-percent" style="background:#fff">
			<div class="list-item ub-box ub-col ub-ver z-padding-v-10-px z-color-888 z-border-top-1-d7d7d7 z-border-bottom-1-d7d7d7  z-height-50-px " :key="key" v-for="(idx, key) in houseStyle">
				<div class='house-box z-border-right-1-d7d7d7 z-width-90-percent' >
					<div @click.stop="$openWin('/pages/error/main')" class="icon ub-box ub-ver z-font-size-12 " :class="key" >
					{{houseStyle[key]['title']}}
					</div>
					<div class="z-padding-v-4-px ub-box ub-ver z-font-size-16 z-color-red">{{houseStyle[key]['value']}}</div> 
				</div>
			</div>
			</div>
		</div>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-20-px ub-box ub-row">
			<ul class="ub-box ub-col ub z-width-50-percent" >
				<li class='z-padding-all-10-px' >
					<span class='z-color-999'>单价:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.sales}}元/平</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>朝向:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.direction}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>楼型:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.style}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>装修:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.decoration}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>用途:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.use}}</span>
				</li>
			</ul>
			<ul class="ub-box ub-col ub z-width-50-percent" >
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>挂牌:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.data}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>楼层:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.floor}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>电梯:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.elevator}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>年代:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.age}}</span>
				</li>
				<li class='z-padding-all-10-px'>
					<span class='z-color-999'>权属:</span>
					<span class='z-padding-left-5-px'>{{houseDetail.belongs}}</span>
				</li>
			</ul>
		</dd>
		<dd>
		<map id="myMap" style="width: 100%; height: 300px;"
			:latitude="location.latitude"
			:longitude="location.longitude"
			:markers="location.markers"
			show-location
			@click="openMap"
		></map>
		<dd class="z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between">
			<ul class="ub-flex-1 ub-box ub-col">
				<li v-for="(val, idx) in comments" :key="idx" class="z-border-bottom-1-eee">
					<comment :comment="val" :isShowLike="false"></comment>
				</li>
			</ul>
		</dd>
		<dd @click.stop="$openWin('/pages/comment/main')" class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-h-8-px ub-box ub-between">
			<p class="z-margin-bottom-8-px ub-box ub-ver">
				<span style="color:#06c1ae" class="z-font-size-14 z-color-888">查看全部用户评价</span>
			</p>
			<p class="ub-box ub-ver">
				<i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-13 z-color-888"></i>
			</p>
		</dd>				
	  </dl>
	  <div class='bottom-tab z-width-100-percent z-height-60-px ub-box ub-ver z-bg-color-fff z-border-right-0-5-d7d7d7'>
		  <!-- <span>关注</span> -->
		  <div class='z-width-70-percent z-height-50-px z-border-radius-5 z-bg-color-11b8ae z-color-fff ub-box ub-ver z-font-size-20 '>咨询经纪人</div>
	  </div>
	</scroll-view>
  </div>
</template>
<script>
	import recommend from "../../components/recommend.vue"
	import star from "../../components/star.vue"
	import comment from "../../components/comment.vue"
	export default {
		components: {recommend, star, comment},
	  	data () {
			return {
				location: {
					latitude: 23.099994,
					longitude: 113.324520,
					markers: [{
						id: 1,
						latitude: 23.099994,
						longitude: 113.324520,
						name: 'T.I.T 创意园'
					}]
				},
				houseStyle: {
					'sales': {title: '售价', value: '227w'},
					'type': {title: '房型', value: '3室2厅'},
					'area': {title: '建筑面积', value: '89m²'}
				},
				good: {
					goodId: "100",
					img:"https://vrlab-image4.ljcdn.com/release/auto3dhd/ecf31689bd2da47364400b05266a8fe4/screenshot/1568539375_5/pc0_spchUSy6L.jpg?imageMogr2/quality/70/thumbnail/1024x",
					mainTitle: "满两年税费少，户型方正，南向采光通风好",
					subTitle: "2室2厅/58.5m²/西/桂南名都",
					distance: "1.7",
					price: "121",
					sales: "20684"
				},
				imgUrls: [
					'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/4846101/pexels-photo-4846101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				],
				indexImg: [
					'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/4846101/pexels-photo-4846101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				],
				mainTitle: '详情页面',
				subTitle: '单人自助晚餐',
				houseDetail: {
					'sales': 42528,
					'direction': '南',
					'style':  '塔楼',
					'decoration': '精装',
					'use': '普通住宅',
					'data': '2020.11.14',
					'floor': '低楼层/60',
					'elevator':  '有电梯',
					'age': '2015年',
					'belongs': '商品房'
				},
				purchaseInfo: {
					validityDate: '2016.2.5 至 2018.6.14',
					unavailableDate: '周五至周日',
					rules: [
						'提前2天预订，周末及节假日提前2天以上预订。预订电话：0871-68639888转锦厨国际餐厅',
						'锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。',
						'我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。',
						'更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)',
						'部分菜品因时令原因有所不同，请以店内当日实际供应为准',
						'提供免费WiFi',
						'停车位收费标准：免费停车',
					]
				},
				commentsNum: 6,
				comments: [
					{
						header: 'https://i.pinimg.com/originals/1d/90/00/1d9000c7502195316846ff6b02e3f51c.png',
						name: '唐炳强',
						time: '2020-05-07', 
						say: '周边配套:保利水城、万达广场，金融高新区，保利西街，千灯湖公园，省中西医结合医院，桂城医院，南海人民医院、中国银行、农业银行、工商银行、建设银行 ', 
						imgs: [
							'https://image1.ljcdn.com/110000-inspection/pc1_AsJbUBZ7E_1.jpg.710x400.jpg',
							'https://image1.ljcdn.com/110000-inspection/apc_vGXkjfrOT_1.jpg.710x400.jpg',
							'https://image1.ljcdn.com/110000-inspection/pc0_LkQcqNAVD_1.jpg.710x400.jpg',
						]
					},
					{
						header: 'https://i.pinimg.com/originals/1d/90/00/1d9000c7502195316846ff6b02e3f51c.png',
						name: '王梓林',
						time: '2021-02-06', 
						star: '4.5',
						say: '房子是精装的，中高楼层，视野开阔，业主诚心卖，本人对小区熟悉，欢迎咨询', 
						imgs: [
							'https://image1.ljcdn.com/110000-inspection/pc1_XMN8x7axM_1.jpg.710x400.jpg',
							'https://image1.ljcdn.com/110000-inspection/pc0_0PqxhnDhz_1.jpg.710x400.jpg',
							'https://image1.ljcdn.com/110000-inspection/pc0_LkQcqNAVD_1.jpg.710x400.jpg'

						]
					},
				],
			}
		},
		methods: {
			previewImage(imgs, curIdx){
				wx.previewImage({current: imgs[curIdx], urls: [imgs[curIdx]]})
			},
			openMap(){
				wx.getLocation({
					type: 'gcj02', //返回可以用于wx.openLocation的经纬度
					success (res) {
						const latitude = res.latitude
						const longitude = res.longitude
						wx.openLocation({
							latitude,
							longitude,
							scale: 18
						})
					}
				})
			},
			clickCall() {
		      wx.showActionSheet({
		        itemList: ['客服电话：10107888'],
		        success(res) {
		          switch(res.tapIndex) {
		            case 0:
		              wx.makePhoneCall({phoneNumber: '10107888'})
		              break
		          }
		        }
		      })
		    },
		},
		onShow() {
    		wx.setNavigationBarTitle({title: this.mainTitle})
  		}
	}
</script>
<style scoped>
.swiper{
  height: 500rpx;
  width: 100%;
}
.swiper-item image {
  background-size: cover;
}
.list-item {
  width:33%;
  box-sizing: border-box;
}
.list-item:last-child .house-box{
	border-right: none;
}
.bottom-tab {
	position: fixed;
	bottom: 0;
}
  .container{width:100%;height:100vh;background:#fff}
  .indexImg{height: 170px;position: relative;}
  .indexImg-bk{position: absolute;bottom: 0;left: 0;z-index: 1;width: 100%;height: 30%;background: rgba(0,0,0,.3);padding: 5px 0px}
  .buyBtn{background: #f90;padding: 8px 12px;border-radius:3px}
  .label{border-radius:3px;background: #fff;padding: 3px 5px;margin: 0 5px 5px 0}
  .tuijian{color: #f90;border:1px solid #f90;}
  .butuijian{color: #999;border:1px solid #ddd;}
</style>
