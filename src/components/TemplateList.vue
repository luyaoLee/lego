<template>
  <div class="template-list-view">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in list" :key="item.id" class="item">
        <router-link :to="{ name: 'template', params: { id: item.id } }"
          ><el-card style="max-width: 480px" shadow="hover">
            <template #header>Yummy hamburger</template>
            <div class="img-box">
              <img :src="item.coverImg" style="width: 100%" />
            </div>
            <template #footer>
              <div class="description-detail">
                <span>作者：Test</span>
                <span class="user-number">0</span>
              </div>
            </template>
          </el-card></router-link
        >
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TemplateList',
  props: {
    list: {
      type: Array<any>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.template-list-view {
  .img-box {
    height: 320px;
    overflow: hidden;
  }
  .item {
    margin-bottom: 20px;
  }
}
</style>
