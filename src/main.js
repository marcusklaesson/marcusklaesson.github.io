import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'


Vue.use(SequentialEntrance);
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
