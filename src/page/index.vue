<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu></m-menu>
      </el-col>
      <el-col :span="19">
        <m-life></m-life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="isStyle"></container>
      </el-col>
      <el-col :span="24">
        <container :nav="recomment"></container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu";
import MLife from "@/components/index/life";
import Container from "@/components/index/container";
export default {
  data() {
    return {
      isStyle: {
        class:"istyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人spa",
            tab: "spa"
          },
          {
            text: "全电影演出部",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "aa"
          }
        ]
      },
      recomment: {
          class:"youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "spa"
          },
          {
            text: "全电影演出部",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "aa"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    Container
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
