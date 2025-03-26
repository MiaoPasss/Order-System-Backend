<template>
  <div class="left-header">
    <Collapse></Collapse>
  </div>
  <LoginOut></LoginOut>
</template>

<script setup lang="ts">
import Collapse from './Collapse.vue';
import LoginOut from './LoginOut.vue';
</script>

<style scoped>
.left-header {
  display: flex;
  align-items: center;
}
</style>