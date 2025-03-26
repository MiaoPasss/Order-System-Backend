<template>
  <el-icon style="cursor: pointer;" :size="26" @click="iconClick">
    <!-- dynamic component: 有些场景会需要在两个组件间来回切换 -->
    <component :is="status ? Expand : Fold"></component>
  </el-icon>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue';
import { collapseStore } from '@/store/collapse';
import { computed } from 'vue';

// get store
const store = collapseStore()
// get state
const status = computed(() => {
  return store.getCollapse
})
// icon on-click event
const iconClick = () => {
  store.setCollapse(!store.collpase)
}
</script>

<style scoped>

</style>