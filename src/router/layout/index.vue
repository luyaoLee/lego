<template>
  <div class="home-view">
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexView',
  setup() {
    return {}
  },
  components: {}
})
</script>

<style lang="scss" scoped>
.el-header {
  background-color: red;
  text-align: center;
  font-size: 30px;
  color: aliceblue;
}

.el-main {
  padding: 60px;
}

.el-footer {
  background-color: blueviolet;
  text-align: center;
  font-size: 30px;
  color: aliceblue;
}
</style>
