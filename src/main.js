import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import css framework to decorate web UI
import 'semantic-ui-css/semantic.css'
//import and config "flash-message" library => display popup message
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 5000
  }
})
Vue.config.productionTip = false

new Vue({
  // declare to use router
  router,
  render: function (h) { return h(App) },
}).$mount('#app')