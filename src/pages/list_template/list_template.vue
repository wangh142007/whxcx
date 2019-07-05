<template>
  <div class="tmpContainer">
    <div class="avatar_data">
      <img src="/static/images/avatar/0.png"/>
      <span>2018</span>
    </div>
    <p class="company">尚硅谷</p>
    <img class="detail_img" src="/static/images/user.png"/>
    <p class="content">尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷尚硅谷</p>
    <div class="view_star_container">
      <img src="/static/images/icon/star.png"/>
      <span>66</span>
      <img src="/static/images/icon/view.png"/>
      <span>88</span>
    </div>  
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.tmpContainer{
  display: flex;
  flex-direction: column;
  border-bottom: 1rpx solid #111; 
}

.avatar_data{
  padding: 10rpx;
}

.avatar_data img{
  width: 60rpx;
  height: 60rpx;
  vertical-align: middle;
  margin-right: 10rpx;
}

.avatar_data span{
  font-size: 28rpx;
  color: #333;
}

.company{
  font-size: 40rpx;
  font-weight: bold;
  padding: 10rpx
}

.detail_img{
  width: 100%;
  height: 460rpx;
}

.content{
  font-size: 32rpx;
  text-indent: 32rpx;
  line-height: 50rpx;
  letter-spacing:3rpx; 
}

.view_star_container img{
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
  margin-left: 10rpx;
}

.view_star_container span{
  font-size: 22rpx;
  color: #333;
  margin-left: 10rpx;
}
</style>
