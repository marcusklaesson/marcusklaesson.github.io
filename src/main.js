import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import VueFlip from "vue-flip";
import vueSmoothScroll from 'vue2-smooth-scroll'



Vue.use(vueSmoothScroll)
Vue.use(SequentialEntrance);
Vue.use(Buefy)
Vue.use(VueFlip)
Vue.config.productionTip = false



new Vue({
  render: h => h(App)
}).$mount('#app')
