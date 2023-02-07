import { createApp } from 'vue'
import './style.css'
import './assets/variable.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
