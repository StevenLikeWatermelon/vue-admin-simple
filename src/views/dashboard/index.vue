<template>
  <div>
    <el-button type="primary" @click="toDemo1">大屏demo1</el-button>
    <el-button type="primary" @click="toDemo2">大屏demo2</el-button>
    <el-button type="primary" @click="toDemo3">大屏demo3</el-button>
    <el-button type="primary" @click="toDemo4">大屏demo4</el-button>

    <p>demo仅做展示使用。样式暂未做自适应无滚动条处理</p>
  </div>
</template>

<script>
export default {
  methods: {
    toDemo1() {
      this.$router.push({
        path: '/demo1'
      })
    },
    toDemo2() {
      this.$router.push({
        path: '/demo2'
      })
    },
    toDemo3() {
      this.$router.push({
        path: '/demo3'
      })
    },
    toDemo4() {
      window.open('http://121.5.172.29:8080')
    }
  }
}
</script>

<style>

</style>
