import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue';
import TimerSandIcon from 'vue-material-design-icons/TimerSand.vue';
import BedEmptyIcon from 'vue-material-design-icons/BedEmpty.vue';
import AlertOutlineIcon from 'vue-material-design-icons/AlertOutline.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('clock-icon', ClockOutlineIcon);
Vue.component('sand-icon', TimerSandIcon);
Vue.component('bed-icon', BedEmptyIcon);
Vue.component('alert-icon', AlertOutlineIcon);



new Vue({
  render: h => h(App),
}).$mount('#app')
