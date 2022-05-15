import Vue from 'vue'


import App from './App'

import Router from './router'

import{BootstrapVue} from 'bootstrap-vue'
import store from "./store";
import "./assets/tailwind.css"




Vue.config.productionTip = false

Vue.use(BootstrapVue)


let vueRoute=new Vue({
store,
router:Router,

render: h => h(App),

}).$mount('#app')



export default vueRoute