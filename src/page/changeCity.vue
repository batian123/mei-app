<template>
    <div class="page-changeCity">
        <el-row>
            <province></province>
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotList"></hot>
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/Province'
import hot from "@/components/changecity/hot.vue"
import Category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default{
    components:{
        Province,
        hot,
        Category
    },
    data() {
        return {
            hotList: [],
            rencentList: [],
        }
    },
    created(){
        api.getHotCity().then((res)=>{
            this.hotList=res.data.data.map((item)=>{
                return item.name
            })
        })
        api.getRecentCity().then((res)=>{
            this.rencentList=res.data.data.map((item)=>{
                return item.name
            })
        })
    },
}
</script>

<style scoped>

</style>