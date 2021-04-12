<template>
  <div class="counter-warp">
    <div v-if="isLogin===false" class="ub-box z-padding-left-10-px z-padding-right-10-px z-padding-bottom-10-px" style="background:#fff">
      <div class="ub-box ub-ver">
         <image :src="userInfo.avatarUrl || 'https://i.pinimg.com/originals/1d/90/00/1d9000c7502195316846ff6b02e3f51c.png'" class="head-img" mode="aspectFill"></image>
      </div>
      <div class="ub-flex-1 z-font-size-18 z-color-999  ub-box ub-ver-v z-padding-h-10-px .z-font-weight-bold">
        <button v-if="isLogin===false" class="loginBtn z-bg-color-fff" lang="zh_CN" open-type="getUserInfo" @getuserinfo="onGetUserInfo">点击注册/登录</button>
        <ul v-if="isLogin===true" class="ub-box z-margin-left-10-px ub-col">
          <li class="z-font-size-16 z-color-333 z-margin-bottom-5-px">{{userInfo.nickName}}</li>
          <li class="z-font-size-14 z-color-888">{{userInfo.province}} {{userInfo.city}} {{userInfo.gender}}</li>
        </ul>
      </div>
      
    </div>
    <div v-if="isLogin===true" class="ub-box ub-col z-margin-top-6-px z-padding-all-8-px" style="background:#fff">
        <div class="ub-box ub-col">
          <Message v-for="(val, idx) in 3" :key="idx" :isLast="idx===2"/>
        </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import Message from '@/components/message'
export default {
  components: {
    Message
  },
  computed: {
   isLogin() {
      return this.$store.state.isLogin
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    onGetUserInfo (e) {
      this.$store.commit('updateIsLogin', true)
      this.$store.commit('updateUser', e.mp.detail.userInfo)
    }
  }
}
</script>

<style>
.counter-warp{
  background-color: #f5f5f5;
}
.head-img {
    width:70px;
    height:70px;
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,.2);
    background:#eee
  }
.loginBtn{
    font-size:14px;
    padding:0px 20px;
    margin-left: 10px;
    border: 0.5px solid #eee;
  }
</style>
