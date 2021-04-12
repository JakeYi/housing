<template>
  <div
    @click.stop="gotoDetail(good.goodId)"
    class="card ub-box z-padding-v-10-px"
    :class="{ 'z-border-bottom-1-eee': isLast == false }"
  >
    <img :src="good.img" class="z-img-cover" />
    <div class="z-padding-h-10-px ub-flex-1 ub-box ub-col">
      <p class="ub-flex-1 ub-box ub-ver ub-between">
        <span
          class="z-width-90-percent z-font-size-15 z-lineHeight-20 z-lines-2-overflow-hidden z-font-weight-bold"
          >{{ good.mainTitle }}</span>
      </p>
      <p class="z-font-size-12 z-color-666 z-lineHeight-20">
        {{ good.subTitle }}
      </p>
      <p class="ub-flex-1 ub-box ub-ver ub-between ub-flex-end">
        <span class="z-font-size-16" style="color: #06c1ae"
          >{{ good.price }}万</span
        >
        <span class="z-font-size-12 z-color-888">{{ good.sales }}元/平</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["curGood", "isLast"],
  data() {
    return {
      good: {
         goodId: "100",
        img:"https://vrlab-image4.ljcdn.com/release/auto3dhd/ecf31689bd2da47364400b05266a8fe4/screenshot/1568539375_5/pc0_spchUSy6L.jpg?imageMogr2/quality/70/thumbnail/1024x",
        mainTitle: "南桂路地铁上盖 70年产权可入户佛山 两房可改叁房",
        subTitle: "2室2厅/58.5m²/西/桂南名都",
        distance: "1.7",
        price: "121",
        sales: "20684"
      },
    };
  },
  methods: {
    gotoDetail(id) {
      wx.navigateTo({url: '/pages/goodDetail/main'})
    }
  },
};
</script>
<style scoped>
.card img {
  width: 100px;
  height: 90px;
}
</style>
