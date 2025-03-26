import { defineStore } from "pinia";

// 定义store
export const collapseStore = defineStore('collapseStore', {
  state:() => {
    return {
      collpase:false
    }
  },
  getters: {
    getCollapse(state) {
      return state.collpase
    }
  },
  actions: {
    setCollapse(collpase:boolean) {
      this.collpase = collpase
    }
  }
})