<template>
  <div class="counter-warp">
    <HomeHeader />
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
    <!-- 列表 -->
    <div class="ub-box z-padding-v-5-px z-padding-top-30-px" style="background:#fff">
        <div class="list-item ub-box ub-col ub-ver" :key="key" v-for="(idx, key) in iconMap">
          <dd @click.stop="$openWin('/pages/error/main')" class="icon ub-box ub-ver iconfont" :class="key" :style="{background: iconMap[key]['bk']}"></dd>
          <span class="z-padding-v-8-px z-font-size-12 z-color-333">{{iconMap[key]['title']}}</span> 
        </div>
      </div>
    <div class="ub-box ub-col z-margin-top-6-px z-padding-all-8-px" style="background:#fff">
        <div class="ub-box ub-col z-margin-top-6-px z-padding-all-8-px z-font-size-18">
          推荐房源
        </div>
        <div class="ub-box ub-col">
          <Recommend v-for="(val, idx) in 7" :key="idx" :isLast="idx===6"/>
        </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import HomeHeader from '@/components/header'
import Recommend from '@/components/recommend'
export default {
  components: {
    HomeHeader, Recommend
  },
  methods: {
    previewImage(imgs, curIdx){
				wx.previewImage({current: imgs[curIdx], urls: [imgs[curIdx]]})
		}
  },
  data () {
    return {
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
      iconMap: {
        'icon-secondhouse': {title: '二手房', bk: '#5DC1A9'},
        'icon-newhouse': {title: '新房', bk: '#E4463B'},
        'icon-renthouse': {title: '租房', bk: '#EF8B3E'}
      }
    }
  }
}
</script>

<style>
.swiper{
  height: 500rpx;
  width: 100%;
}
.swiper-item image {
  background-size: cover;
}
.list-item {
  width:33%;
  padding: 10px 13px 0 13px;
  box-sizing: border-box;
}
.icon {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  color: #fff;
  font-size: 24px
}
  .Recommend{border-bottom: 1px solid #DDD8CE}
  .Recommend img{width: 80px;height: 80px}
</style>
