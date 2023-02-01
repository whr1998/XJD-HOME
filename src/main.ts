import { createApp } from 'vue'
import './style.css'
import './assets/variable.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CardVue from './components/Card/Card.vue'

export const app = createApp(App)

// 注册全局组件
app.component('Card', CardVue)

app.use(ElementPlus)

app.mount('#app')
