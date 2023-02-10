<template>
  <div>
    <el-button type="primary" @click="toDemo1">大屏demo1</el-button>
    <el-button type="primary" @click="toDemo2">大屏demo2</el-button>
    <el-button type="primary" @click="toDemo3">大屏demo3</el-button>
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
    }
  }
}
</script>

<style>

</style>
