// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import test from './router/test'
//import {aaa,ddd} from './router/test'
import * as tst from './router/test'
/*
console.log(test.get());
test.set(6);
console.log(test.get());
*/
console.log(tst.default)
console.log(tst.aaa)
tst.ddd()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
