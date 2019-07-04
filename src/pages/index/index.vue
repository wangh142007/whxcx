<template>
  <div class="indexContainer">
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl"></img>
    <Button v-else type="open-type" @getuserinfo="getUserInfo">点击获取用户信息</Button>
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div @click="toDetail" class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo:{},
      isShow:false //用户没有授权 
    }
  },
  beforeMount(){
    this.handleGetUserInfo()
  },
  methods:{
    handleGetUserInfo(){
      wx.getUserInfo({
      success: (data) =>{
        console.log(data)
        this.userInfo = data.userInfo;
        this.isShow = true;
      },
      fail:()=>{
        console.log('获取失败')
      }
    })
    },
    getUserInfo(data){
      //判断用户是否授权
      if(data.mp.detail.rawData){
        //用户授权
        this.handleGetUserInfo()
      }
    },
    toDetail(){
      wx.navigateTo({
        url:'/pages/list/main'
      })
    }
  }

}
</script>

<style>
  page{
    background: #8ed145;
  }
  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }

  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }

  .goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }
</style>
