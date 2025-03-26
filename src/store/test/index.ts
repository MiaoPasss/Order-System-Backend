import { defineStore } from "pinia";

// 定义store
// 第一个参数：id
export const testStore = defineStore('testStore', {
    state:() => {
        return {
            count: 0
        }
    },
    getters:{
        getCount(state) {
            return state.count
        }
    },
    actions:{
        setCount(count:number) {
            this.count = count
        }
    }
})