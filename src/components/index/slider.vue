<template>
    <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgList" :key="item.url">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default{
    data(){
        return{
            imgList:[
                {
                    url:'#xxx',
                    img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                },
                 {
                    url:'#aaa',
                    img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                },
                 {
                    url:'#cc',
                    img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                }
            ]
        }
    },
}
</script>

<style scoped>

</style>