<template>
<div class="">
    <span class="name">省非选择</span>
    <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive" @change="changeProvince"
       className="province"></m-select>
    <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive"
      @change_active="changeCityActive" @change="changeCity" :disabled="cityDisabled"
      className="city"
      ></m-select>
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
</div>
</template>

<script>
import MSelect from '@/components/changeCity/select'
import api from '@/api/index.js'
export default{
    components:{
        MSelect,
    },
    created(){
        api.getProvinceList().then((res)=>{
            this.provinceList=res.data.data.map((item)=>{
                 item.name=item.provinceName;
                 return item;
            })
            console.log(this.provinceList)
        })
        api.getRecentCity().then((res)=>{
            this.rencentList=res.data.data.map((item)=>{
                return item.name
            })
        })
    },
    data(){
        return {
            provinceList: [],
            province:"省份",
            cityList:[],
            city:"城市",
            cityActive: false,
            provinceActive: false,
            searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
            searchWord: '',
            loading: false,
            cityDisabled: true,
        }
    },
     methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;

      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
        this.province = item.name;
        this.cityDisabled = false;
        this.cityList = item.cityInfoList;
        console.log(this.cityList);
    },
    changeCity(item) {
        this.city = item.name;
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'index'})
    },
    remoteMethod(val) {
        // 请求后端接口
        console.log(document.cookie, localStorage)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
</style>