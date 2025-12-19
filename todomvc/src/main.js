import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './06-computed/App.vue'
import router from './07-routing/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
