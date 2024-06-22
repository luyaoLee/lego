<template>
  <div class="template-detail-view">
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-main>
        <div class="detail-container">
          <el-row justify="center">
            <el-col :span="8"
              ><img
                src="https://static.imooc-lego.com/upload-files/screenshot-889755.png"
                width="400px"
                alt=""
            /></el-col>
            <el-col justify="center" :span="6">
              <h2>前端架构师直播海报</h2>
              <p>如何突破前端成长瓶颈？</p>
              <div class="author">该模版由 <b>Viking</b> 创作</div>
              <div class="bar-code-area">
                <span>扫一扫，手机预览</span>
                <div ref="container"></div>
              </div>
              <div class="use-button">
                <router-link :to="{ path: '/editor' }"
                  ><el-button type="primary" size="large"> 使用模版 </el-button></router-link
                >
                <el-button size="large"> 下载图片海报 </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TemplateDetailView',
  setup() {
    return {}
  },
  components: {}
})
</script>

<style lang="scss" scoped>
.template-detail-view {
  .el-header {
    background-color: red;
    text-align: center;
    font-size: 30px;
    color: aliceblue;
  }
  .el-main {
    text-align: center;
  }
}
</style>
