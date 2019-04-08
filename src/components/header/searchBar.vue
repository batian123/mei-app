<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col class="left" :span="3">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col class="center" :span="15">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="item in hotList" :key="item">
                            <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="item in inpList" :key="item">
                            <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                        <router-link v-for="item in suggest" :key="item" :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                    </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default{
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotList: [],
      inpList: [],
      suggest: []

    }
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  created(){
    api.searchHotWords().then((res)=>{
      console.log(res);
      this.hotList=res.data.data;
      this.suggest=res.data.data;
    })
    .catch( (error)=>{
    console.log(error);
  });
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input(){
    let val = this.searchWord;
    api.getSearchList().then((res)=>{
          this.inpList=res.data.data.list.filter((item,index)=>{
            return item.indexOf(val)>-1;
          })

        })
        .catch( (error)=>{
        console.log(error);
      });
    }
  },
  watch:{
    "$route.params.name":function(){
      this.searchWord=this.$route.params.name
    }
  }
}
</script>

<style lang="scss">

</style>
