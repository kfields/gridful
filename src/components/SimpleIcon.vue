<template>
<div class="simpleicon" v-html="svg"/>
</template>
<script>
const simpleIcons = require('simple-icons')

export default {
  name: 'SimpleIcon',
  props: ['name'],
  components: {
  },
  data () {
    return {
      svg: ""
    }
  },
  mounted () {
    this.svg = simpleIcons[this.name].svg
    console.log(simpleIcons[this.name])
  }
}
</script>
<style>
</style>