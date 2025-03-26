<template>
    <el-container class="layout">
      <el-aside width="auto" class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
import Header from './header/Header.vue';
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .aside {
        background-color: #304156;
    }
    .header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d8dce5 !important;
      justify-content: space-between;
    }
    .main {
    }
}
</style>