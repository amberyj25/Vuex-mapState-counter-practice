<template>
  <div>
    <p>2.mapState 放物件</p>
    <p>{{count2}}</p>
    <button @click="add2">+1</button>
  </div>
</template>

<script>
import {mapState} from "Vuex"
export default {
  computed:mapState({
    count2:"count2"
  }),
  methods:{
    add2(){
      this.$store.commit("counter2")
    }
    }
}
</script>