<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(val, key) in list">{{val.name}}</div>
    <div>{{count}}&nbsp;&nbsp;<button @click="add">+</button></div>
    <div><button @click="insert">insert todoList</button></div>
    <br/>
    <router-link to="/other">go to Page2</router-link>
  </div>
</template>

<script>
  import { toJS, reaction } from 'mobx';
  import todoListStore from '../stores/todolist-store'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        list: toJS(todoListStore.todos),
        count: toJS(todoListStore.count),
        msg: 'Page1'
      }
    },
    methods: {
      add () {
        todoListStore.addCount();
      },
      insert () {
        todoListStore.addTodo();
      }
    },
    created () {
      reaction(() => todoListStore.todos.length, () => {
        this.list = toJS(todoListStore.todos)
      });
      reaction(() => todoListStore.count, (count) => {
        this.count = count
      })
    }
  }
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
