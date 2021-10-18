import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import Axios from 'axios'
import './plugins/element.js'

Axios.defaults.baseURL="http://127.0.0.1/"

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$http=Axios;  //this.$http.
app.use(store).use(router).mount('#app')