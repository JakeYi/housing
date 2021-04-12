<template>
  <div class="header ub-box ub-col">
    <div class="ub-box ub-ver z-padding-v-10-px" style="background:#fff;">
      <div  @click.stop="$openWin('/pages/citySelect/main')" class="z-padding-h-10-px ub-box ub-ver">
        <span class="z-font-size-14 z-color-666 z-margin-right-3-px">{{curCity}}</span>
         <i class="iconfont icon-xiangxiazhankai z-color-666 z-font-size-16"></i>
      </div>
      <div class="ub-flex-1 ub-box ub-ver">
        <div  class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
          <span class="z-font-size-14 z-color-999 z-margin-left-8-px">你想住在哪?</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'HomeHeader',
    computed: {
      curCity () {
        return this.$store.state.curCity
      }
    }
  }
</script>

<style>
.header{
  width:100%;
  background:#e8e8e8;
}
.search{
  background: #f5f5f5;
  border-radius: 12px;
  padding: 5px 10px
}
</style>
