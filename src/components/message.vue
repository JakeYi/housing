<template>
  <div
    @click.stop=""
    class="card ub-box z-padding-v-10-px"
    :class="{ 'z-border-bottom-1-eee': isLast == false }"
  >
    <img :src="good.img" class="z-img-cover" />
    <div class="z-padding-h-10-px ub-flex-1 ub-box ub-col">
      <p class="ub-flex-1 ub-box ub-ver ub-between">
        <span
          class=" z-font-size-15 z-lineHeight-20 z-lines-2-overflow-hidden z-font-weight-bold"
          >{{ good.mainTitle }}</span
        >
        <span
          class="z-font-size-10 z-lineHeight-20 z-lines-2-overflow-hidden .z-margin-left-10-px .z-bg-color-eee"
          >{{ good.list }}</span
        >
        <span class="ub-flex-1 z-textAlign-right z-font-size-12 z-color-888">{{good.date}}</span>
      </p>
      <p class="z-font-size-12 z-color-666 z-lineHeight-20">
        {{ good.subTitle }}
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
        img:"http://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/556e807a-254a-4589-a1e6-8610ea44c9c4.jpg.1131x1600.jpg?v=1.120x160.jpg",
        mainTitle: "张聪",
        subTitle: "你好",
        list:'德佑锦达中海锦城店',
        date: "11/7",
      },
    };
  },
  methods: {
    // gotoDetail(id) {
    //   wx.navigateTo({url: '/pages/goodDetail/main'})
    // }
  },
};
</script>
<style scoped>
.card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
