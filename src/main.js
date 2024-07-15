import './assets/styles/main.css'
import { createApp } from 'vue'
//import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

//const metaManager = createMetaManager()
const app = createApp(App)

//app.use(metaManager)
app.use(router)

app.mount('#app')
