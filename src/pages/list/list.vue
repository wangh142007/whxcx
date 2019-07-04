<template>
  <div class="listContainer" >
    <swiper indicator-dots indicator-color ="pink" indicator-active-color="green" 
    autoplay="false" interval="5000" duration="1000"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <img :src="item" />
        </swiper-item>
      </block>
    </swiper>
    <div>
      <ListTmp/>
    </div>
  </div>
  
</template>

<script>
  import ListTmp from '../list_template/list_template.vue'

export default {
  components: {ListTmp},
  data () {
    return {
      imgUrls: [
      '/static/images/detail/carousel/01.jpg',
      '/static/images/detail/carousel/02.jpg',
      '/static/images/detail/carousel/03.jpg'
      ]
    }
  }
}
</script>

<style>
  .listContainer swiper {
    width: 100%;
    height: 400rpx;
  }
  .listContainer swiper img {
    width: 100%;
    height: 100%;
  }

</style>
