import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// 加入了移动端适配
import 'lib-flexible'; 

const app = createApp(App);
app.use(router)
app.mount('#app')
