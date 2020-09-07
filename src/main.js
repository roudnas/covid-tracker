import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
