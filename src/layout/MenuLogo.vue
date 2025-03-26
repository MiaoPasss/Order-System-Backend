<template>
  <div class="logo">
    <img :src="MenuLogo" />
    <span v-if="show" class="logo-title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { collapseStore } from '@/store/collapse';

// get store
const store = collapseStore()

const MenuLogo = ref("https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png")
const title = ref("校园点餐系统")

// show and hide title
const show = ref(true)
// const show = computed(() => {
//   return !store.collpase
// })

// smooth menu collapse transition
watch(
  () => store.getCollapse,
  (collapsed: boolean) => {
    if (!collapsed) {
      setTimeout(() => {
        show.value = !collapsed
      }, 300)
    } else {
      show.value = !collapsed
    }
  }
)
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  align-items: center;
  background-color: #000;
  cursor: pointer;
  img{
    width: 36px;
    height: 36px;
    margin-left: 20px;
    margin-right: 12px;
  }
  .logo-title{
    color: white;
    font-weight: bold;
    font-size: 22px;
    font-family: FangSong;
  }
}
</style>