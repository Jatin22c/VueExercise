import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueCollapse from 'vue2-collapse'

Vue.use(VueResource);
Vue.use(VueCollapse);

window.Event = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
