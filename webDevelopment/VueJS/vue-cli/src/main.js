import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store }  from './store/store'

library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App),
}).$mount('#app') //el : '#app'
