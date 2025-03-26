<template>
  <MenuLogo></MenuLogo>
  <el-menu
    :collapse = "collapse"
    router
    background-color="#304156"
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="/dashboard">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><User /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="/category">
      <el-icon><Dish /></el-icon>
      <template #title>菜品分类</template>
    </el-menu-item>
    <el-menu-item index="/goods">
      <el-icon><Memo /></el-icon>
      <template #title>菜品管理</template>
    </el-menu-item>
    <el-menu-item index="/order">
      <el-icon><Monitor /></el-icon>
      <template #title>订单管理</template>
    </el-menu-item>
    <el-menu-item index="/banner">
      <el-icon><Calendar /></el-icon>
      <template #title>广告管理</template>
    </el-menu-item>
    <el-menu-item index="/comment">
      <el-icon><Edit /></el-icon>
      <template #title>评论管理</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { collapseStore } from '@/store/collapse';
import {useRoute} from 'vue-router'
import MenuLogo from './MenuLogo.vue';
import { Memo, Monitor, Calendar, Edit, Dish, HomeFilled, User } from '@element-plus/icons-vue';
import { computed } from 'vue';

// get store
const store = collapseStore()
// set menu status
const collapse = computed(() => {
  return store.collpase
})

// 当前路由
const route = useRoute()
// 获取当前激活的选项
const activeIndex = computed(() => {
  const { path } = route
  return path;
})
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    max-width: 400px;
}
.el-menu {
    border-right: none;
}
.el-menu .el-menu-item {
    color: #bfcbd9;
    font-size: 15px;
    font-weight: bold;
}
.el-menu-item.is-active {
    color: #409eff !important;
    background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */

:deep(.el-menu:hover) {
    background-color: #001528 !important;
}
</style>