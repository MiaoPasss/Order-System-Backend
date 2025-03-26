<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <img class="uimage" src="@/assets/user.png" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style scoped>
.uimage {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>