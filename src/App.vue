<template>
  <div>
    <h2>counter with mapState</h2>
    <counterOne></counterOne>
    <counterTwo></counterTwo>
    <newCountOne></newCountOne>
    <newCountTwo></newCountTwo>
  </div>
</template>

<script>
import counterOne from "./counterOne.vue"
import counterTwo from "./counterTwo.vue"
import newCountOne from "./newCountOne.vue"
import newCountTwo from "./newCountTwo.vue"


export default {
  components:{
    counterOne,
    counterTwo,
    newCountOne,
    newCountTwo,
  }
}
</script>  