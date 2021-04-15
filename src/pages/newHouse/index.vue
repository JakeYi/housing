<template>
  <div class="counter-warp">
    <div class="ub-flex-1 ub-box ub-ver z-bg-color-fff">
        <div  class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border z-padding-all-10-px z-bg-color-fff z-border-all-1-d7d7d7 z-border-radius-5">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
          <!-- <input class="z-font-size-14 z-color-999 z-margin-left-8-px ">请输入小区或者商圈名</input> -->
          <input class="z-font-size-14 z-color-999 z-margin-left-8-px" placeholder="请输入小区或者商圈名"/>
        </div>
    </div>
    <div  class="ub-box z-padding-v-5-px z-padding-top-30-px" style="background:#fff">
      <div class='list-item'>
        <picker  @change="bindPickerChangeLocation" :value="locationIndex" :range="location">
          <div class="picker">
              {{location[locationIndex]}}
          </div>
          <i class="iconfont icon-xiangxiazhankai z-color-666 z-font-size-16"></i>
        </picker>
      </div>
      <div class='list-item'>
        <picker  @change="bindPickerChangeStyle" :value="styleIndex" :range="style">
          <div class="picker">
              {{style[styleIndex]}}
          </div>
          <i class="iconfont icon-xiangxiazhankai z-color-666 z-font-size-16"></i>
        </picker>
      </div>
      <div class='list-item'>
        <picker  @change="bindPickerChangePrize" :value="prizeIndex" :range="prize">
          <div class="picker">
              {{prize[prizeIndex]}}
          </div>
          <i class="iconfont icon-xiangxiazhankai z-color-999 z-font-size-10"></i>
        </picker>
      </div>
    </div>
    <div class="ub-box ub-col  z-padding-all-8-px" style="background:#fff">
        <div class="ub-box ub-col">
          <Recommend v-for="(val, idx) in 7" :key="idx" :isLast="idx===6"/>
        </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import Recommend from '@/components/recommend'
export default {
  components: {
    Recommend
  },
   data: {
    locationIndex: 0,
    styleIndex: 0,
    prizeIndex: 0,
    location: ['广州', '深圳', '佛山', '珠海'],
    style: ['一室', '二室', '三室', '四室','五室', '五室以上'],
    prize: ['50万以下', '50-80万', '80-100万', '100-150万','150-200万', '200-300万','300-500万', '500万以上']
  },
  
  computed: {
  },
  methods: {
    bindPickerChangeLocation: function(e) {
      this.locationIndex = e.mp.detail.value
    },
    bindPickerChangeStyle: function(e) {
      this.styleIndex = e.mp.detail.value
    },
    bindPickerChangePrize: function(e) {
      this.prizeIndex = e.mp.detail.value
    }
  }
}
</script>

<style>
.Recommend{border-bottom: 1px solid #DDD8CE}
  .Recommend img{width: 80px;height: 80px}
  .list-item {
  width:33%;
  padding: 10px 13px 0 13px;
  box-sizing: border-box;
}
.picker {
  display: inline-block;
}
.icon-xiangxiazhankai {
  display: inline-block;
  font-size: 12px;
  padding-left: 3px;
}
</style>
