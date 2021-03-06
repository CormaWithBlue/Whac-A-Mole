// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css' //引入element样式


Vue.prototype.$Element = {
  size: 'small',
  zIndex: 3000
}
// Vue.use(Button);
Vue.use(router);
Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
  // render: h => h(App)
})
