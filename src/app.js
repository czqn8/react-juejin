/**
 * Created by zeal on 2017/7/23.
 */
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

sync(store, router)

const {state} = store

const app = new Vue({
    store,
    router,
    ...App
})

export {app, router, store}
