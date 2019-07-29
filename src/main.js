import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vuex)

Vue.use(Vant)

const store = new Vuex.Store({
  // state是对象
  // 1.state声明数据
  state: {
    count: 100,
    age: 300
  },
  // 1.mutations是对象
  // 2.mutations对象中保存的是同步的方法
  // 3.方法的作用是修改state
  mutations: {
    setCount (state, payload) {
      console.log('setCount---------', payload)
      state.count = 300
    }
  },
  // 补充知识点：
  // 所有异步特点：后续代码不等待
  // 解决方案：1.回调函数 2.Promise 3.async + await

  // actions
  // 1.actions是对象
  // 2.actions里面写的是异步的方法
  // 3.actions中的方法写的是和后台交互的请求
  // 3.1应该写的是Ajax---很麻烦
  // 3.2Ajax是异步的，常见的异步有：Ajax、定时器、所有的事件、操作数据库(增删改查)
  // 4.actions中的方法默认传递store，这里的context形参就是store
  actions: {
    acSetCount (context) {
      // 定时器
      setTimeout(() => {
        // 1.新数据
        const newCount = 1000
        // 2.把新数据通过commit方式交给mutations中的方法
        context.commit('setCount', newCount)
      }, 1000)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
