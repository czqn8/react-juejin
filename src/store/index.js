/**
 * Created by zeal on 2017/7/23.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true  // process.env.NODE_ENV !== 'production',
})

export default store
