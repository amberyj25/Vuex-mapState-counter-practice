<template>
  <div>
    <p>1.mapState 放字串</p>
    <p>{{count1}}</p>
    <button @click="add1">+1</button>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: mapState(["count1"]),
  methods:{
    add1(){
      this.$store.commit("counter1")
    }
    }

}
</script>