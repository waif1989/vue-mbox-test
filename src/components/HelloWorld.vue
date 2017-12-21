<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-link to="/other">go to other pages</router-link>
    <div>{{_count}}</div>
    <button @click="add">+</button>
  </div>
</template>

<script>
  import { autorun, reaction, toJS } from 'mobx';
  // import {connect} from 'vue-mobx';
  const HelloWorldComponent = {
    name: 'HelloWorld',
    data () {
      return {
        testdata: this.$mbstore.total,
        testdata2: 10,
        msg: 'Welcome to Your Vue.js App',
        // count: this.$vmobxStore.total
      }
    },
    computed: {
      _count () {
        // return this.$toJS(this.count);
        return this.count;
        // return 10
      }
    },
    /*fromMobx: {
      _count () {
        return this.$vmobxStore.total;
      }
    },*/
    methods: {
      add () {
        this.count++
        this.$mbstore.changeCount();
        /*this.count++
        reaction (() => this.$mbstore.total, (total) => {
          // this.testdata = total
          // console.log('-----', total)
        })*/
      }
    },
    beforeCreate () {
      // console.log('this.$store----', this.$mbstore)
    },
    created () {
      reaction (() => this.$mbstore.total, (total) => {
        console.log('total----', total)
      })
      /*console.log('====', this.count)
      reaction (() => this.$mbstore.total, (total) => {
        console.log('total----', total)
      })*/
      // console.log(this.$options.testObj.test)
      // console.log('$store----', this)
      /*autorun(() => {
        console.log('this.$vmobxStore.total----', this.$vmobxStore)
        // this.count = this.$vmobxStore.total
      })*/
      /*reaction (() => this.$vmobxStore.total, (total) => {
        console.log('----data', total)
      })*/
    }
  }
  /*export default connect({
    // map models
    hwStore
  })(HelloWorldComponent)*/
  // export default connect(HelloWorldComponent, hwStore)
  export default HelloWorldComponent
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
