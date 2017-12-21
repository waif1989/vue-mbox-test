<template>
  <div>
    <div>other</div>
    <div v-for="(val, key) in list">{{val.name}}</div>
    <div>{{count}}&nbsp;&nbsp;<button @click="redure">-</button></div>

  </div>
</template>

<script>
  import { toJS, reaction } from 'mobx';
  import todoListStore from '../stores/todolist-store'
  export default {
    name: 'Other',
    data () {
      return {
        list: toJS(todoListStore.todos),
        count: toJS(todoListStore.count),
      }
    },
    methods: {
      redure () {
        todoListStore.count--
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
