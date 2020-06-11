<template>
  <div>
    <h2>counter with mapState</h2>
    <counterOne></counterOne>
    <counterTwo></counterTwo>
  </div>
</template>

<script>
import counterOne from "./counterOne.vue"
import counterTwo from "./counterTwo.vue"
export default {
  components:{
    counterOne,
    counterTwo
  }
}
</script>  