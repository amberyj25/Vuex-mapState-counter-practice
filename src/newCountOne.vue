<template>
  <div>
    <h2>mapState - function</h2>
    <p>{{newCount1}}</p>
    <button @click="addNewCount1">+150</button>
  </div>
</template>

<script>
import {mapState} from 'Vuex'
export default{
  computed:mapState({
    newCount1:state=>state.newCount1
  }),
  methods:{
    addNewCount1(){
      this.$store.commit("newCounter1")
    }
  }
}
</script>