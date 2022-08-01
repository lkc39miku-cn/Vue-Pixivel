import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as elementPlusIcon from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn"
import 'element-plus/theme-chalk/display.css'

const app = createApp(App)

app.use(elementPlus, {zhCn})
for (const [key, value] of Object.entries(elementPlusIcon)) {
    if ('Menu' !== key) {
        app.component(key, value)
    } else {
        app.component(key + 'Icon', value)
    }
}

app.mount('#app')