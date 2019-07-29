<template>
  <div id="app">App
    <van-button type="warning">警告按钮</van-button>

    <h3>使用vuex中的state的count</h3>
    <p>{{this.$store.state.count}}</p>
    <hr>
    <p>{{count}}</p>
    <!-- 使用组建 -->
    <child></child>
    <hr>
    <button @click="setCount">按钮1</button>
    <button @click="acSetCount">按钮2</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Child from './Child'
export default {
  // 注册组件
  components: {
    Child
  },
  // 在组件中使用vuex的state数据
  // 1.需要把state数据映射(修改)为组件的computed(计算属性)
  // 2.利用vuex的辅助函数mapState简化代码
  // 2.1mapState是方法
  // 2.2mapState()的实参可以是['state中的数据名']
  // 2.3mapState()返回一个对象{count:function () {return this.$store.state.count}}

  computed: {
    ...mapState(['count'])
    // 上面的代码解析完就是下面的代码
    // count () {
    //   return this.$store.state.count
    // },
    //  age () {
    //   return this.$store.state.age
    // }
  },
  methods: {
    // mutations的用法
    // 1.映射为组件的methods
    // 2.可以利用vuex的辅助函数mapMutations简化下面的代码
    ...mapMutations(['setCount']),
    // setCount() {
    //   this.$store.commit('setCount')
    //   // this.$store.commit('setCount','自己的实参')
    // }

    // actions的用法
    // fn2(){
    ...mapActions(['acSetCount'])
    //   this.$store.dispatch('acSetCount')
    // }
    // acSetCount(){
    //   this.$store.dispatch('acSetCount')
    // }
  }
}
</script>
<style lang="less">

</style>
