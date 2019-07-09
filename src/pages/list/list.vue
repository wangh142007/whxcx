<template>
  <div class="listContainer" >
    <!-- <swiper indicator-dots indicator-color ="pink" indicator-active-color="green" 
    autoplay="false" interval="5000" duration="1000"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <img :src="item" />
        </swiper-item>
      </block>
    </swiper> -->
    <swiper indicator-dots
              autoplay="true"
              indicator-color="pink"
              indicator-active-color="green">
        <swiper-item>
          <!--这里用的是微信小程序自带的图片组件 image-->
          <image src="/static/images/detail/carousel/01.jpg"/>
        </swiper-item>
        <swiper-item>
          <image src="/static/images/detail/carousel/02.jpg"/>
        </swiper-item>
        <swiper-item>
          <image src="/static/images/detail/carousel/03.jpg"/>
        </swiper-item>

      </swiper>
    <div>
      <ListTmp v-for="(item, index) in listTmp" 
      :key="index" 
      :item="item" 
      :index="index"/>
    </div>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'

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
  },
  computed:{
    //去映射状态到本组件
    ...mapState( [ 'listTmp' ] )
  },
  //生命周期(mounted)
  mounted () {

  } ,
  beforeMount () {
    //分发 action 修改状态
    this.$store.dispatch( 'getList' )
    } ,
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
