<template>
    <el-container class="layout">
      <el-aside width="auto" class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .aside {
        background-color: #304156;
    }
    .header {
    }
    .main {
    }
}
</style>