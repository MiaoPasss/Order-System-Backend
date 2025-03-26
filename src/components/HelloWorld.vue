<script setup lang="ts">
import { testStore } from '@/store/test/index';
import { computed } from 'vue';

// import { Edit } from '@element-plus/icons-vue';
const store = testStore();
const addBtn = () => {
  // store.count++;

  // store.setCount(++store.count)

  // store.$patch({
  //   count:++store.count
  // })

  store.$patch((state) => {
    state.count = ++state.count
  })
}

const count = computed(() => {
  return store.count
})
</script>

<template>
  <div class="mb-4">
    <el-button @click="addBtn" type="primary">Primary</el-button>
  </div>
  <div>{{ count }}</div>
  <el-icon>
    <Edit />
  </el-icon>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
