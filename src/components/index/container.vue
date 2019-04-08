<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item,index) in nav.list" :key="index" :class="{active:kind==item.tab}" :data-type="item.tab">{{item.text}}</dd>
      <!-- <dd :class="{active:kind=='food'}" data-type="food">safa</dd>
      <dd :class="{active:kind=='spa'}" data-type="spa">safa</dd>
      <dd :class="{active:kind=='movie'}" data-type="movie">safa</dd>
      <dd :class="{active:kind=='travel'}" data-type="travel">safa</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="poi-info">
              <div class="title" title="item.title">{{item.title}}</div>
              <div
                class="sub-title"
                :title="item.sub_title"
              >{{item.sub_title}}</div>
              <!-- <div class="price-info" v-if="item.rentNum&&item.price_info.current_price&&!item.price_info.avg_price"> -->
              <div class="price-info" >
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">
                    {{item.price}}
                    <!-- <span class="current-price-type">/人均</span> -->
                  </span>
                  <!-- <span class="old-price">门市价¥{{item.price}}</span> -->
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </span>
              </div>
              <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">
                    抢光了
                  </span>
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </span>
              </div>
              <div class="price-info" v-else>
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">
                    {{item.price_info.avg_price}}
                    <span class="current-price-type">/{{item.price_info.units}}</span>
                  </span>
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </span>
              </div> -->
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  props:['nav'],
  created(){
    api.getResultProducts().then((res)=>{
      this.resultData=res.data.data;
    })
  },
  data(){
    return {
      resultData:{},
      kind:"all",
      // list:[
      //   {
      //     image:'//p1.meituan.net/deal/201203/31/002.jpg@368w_208h_1e_1c',
      //     title:'广安门电影院',
      //     sub_title:"免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅",
      //     price_info:{
      //       current_price:18,
      //       old_price:36,
      //       avg_price:null,
      //       units:null,
      //     },
      //     address:'上海',
      //     rentNum:0,
      //   },
      //   {
      //     image:'//p1.meituan.net/deal/201203/31/002.jpg@368w_208h_1e_1c',
      //     title:'广安门电影院',
      //     sub_title:"免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅",
      //     price_info:{
      //       current_price:18,
      //       old_price:36,
      //       avg_price:18,
      //       units:'人均',
      //     },
      //     address:'上海',
      //     rentNum:10,
      //   },
      //   {
      //     image:'//p1.meituan.net/deal/201203/31/002.jpg@368w_208h_1e_1c',
      //     title:'广安门电影院',
      //     sub_title:"免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅",
      //     price_info:{
      //       current_price:18,
      //       old_price:36,
      //       avg_price:null,
      //       units:null,
      //     },
      //     address:'上海',
      //     rentNum:10,
      //   },
      // ]
    }
  },
  methods:{
    over(e){
      // console.log(e);
      let dom=e.target;
      let tagname=dom.tagName.toLowerCase();
      console.log(tagname);
      if(tagname!=='dd'){
        return false;
      }
      this.kind=dom.getAttribute('data-type');
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>