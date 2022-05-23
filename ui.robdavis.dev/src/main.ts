import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, storeKey } from './store'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone)
library.add(faCircle)

createApp(App)
    .use(store, storeKey)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .mount('#app')
