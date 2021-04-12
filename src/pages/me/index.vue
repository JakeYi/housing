<template>
  <div class="me ub-box ub-col">
    <div class="ub-box z-padding-all-10-px" style="background:#fff">
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
    <dl class="ub-box ub-col z-margin-top-10-px" style="background:#fff;">
      <dd @click.stop="gotoOrderList()" class="z-padding-all-20-px ub-box ub-between" style="border-bottom:1px solid #eee">
        <p class="ub-box ub-ver">
        <i class="iconfont icon-danju" style="color:#06c1ae;font-size:20px"></i>
        <span class="z-font-size-15 z-color-666 z-padding-h-10-px">我关注的</span>
        </p>
        <p class="ub-box ub-ver">
        <i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-14 z-color-888"></i>
        </p>
      </dd>
       <dd @click.stop="clickCall()" class="z-padding-all-20-px ub-box ub-between">
        <p class="ub-box ub-ver">
        <i class="iconfont icon-dianhua" style="color:#06c1ae;font-size:20px"></i>
        <span class="z-font-size-15 z-color-666 z-padding-h-10-px">客服电话：10107888</span>
        </p>
      </dd>
    </dl>
    <div v-if="isLogin===true" class="z-font-size-18 z-padding-all-10-px z-margin-top-20-px ub-box ub-between" style="background:#fff">
        <div @click.stop="exitLogin()" class="exitBtn ub-box ub-ver z-font-size-14">退出登录</div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  data () {
    return {}
  },
  methods: {
    onGetUserInfo (e) {
      this.$store.commit('updateIsLogin', true)
      this.$store.commit('updateUser', e.mp.detail.userInfo)
    },
    exitLogin() {
      this.$store.commit('updateIsLogin', false)
      this.$store.commit('cleanUserInfo')
    },
    gotoOrderList() {
      wx.switchTab({url: '/pages/orderList/main'})
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
    }
  },
  onShow () {
    wx.setNavigationBarTitle({title: '我的'})
  }
}
</script>
<style scoped>
  .me{
    width:100%;
    height:100vh;
    background:#e8e8e8;
    object-fit: cover
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
  .exitBtn{
    padding:7px 15px;
    width: 100%;
    }
</style>
