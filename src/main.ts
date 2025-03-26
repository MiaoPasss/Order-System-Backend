import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// createApp(App).mount('#app')

const pinia = createPinia();
const app = createApp(App);
app.use(router).use(ElementPlus).use(pinia).mount('#app')

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }