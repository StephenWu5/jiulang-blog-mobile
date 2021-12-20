import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/normalize.css'
// 加入了移动端适配，lib-flexible就是为了计算font-size的值写额外的逻辑了。
import 'lib-flexible'

const app = createApp(App);
app.use(router)
app.mount('#app')
