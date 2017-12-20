<template>
  <div>
    <div>other</div>
    <div>{{count}}</div>
    <button @click="redure">-</button>
  </div>
</template>

<script>
  import { autorun } from 'mobx';
  export default {
    name: 'Other',
    data () {
      return {
        count: this.$mbstore.total
      }
    },
    methods: {
      redure () {
        this.$mbstore.count = this.$mbstore.count - 1
      }
    },
    created () {
      autorun(() => {
        this.count = this.$mbstore.total
      })
    }
  }
</script>
