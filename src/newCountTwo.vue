<template>
  <div>
    <h2>mapState - function (總管理處的State +component 的data)</h2>
    <p>1.總管理處的原本State的數量為：{{newCount2}}</p
    <p>2.總管理處的原本數量每點擊一次就加上25（每點擊一次加25到總管理處數量內）(點擊button才執行)</p>
    <p>點擊後累加的數量為：{{newCount3}}</p>
    <button @click="addnewCount3">+25</button>
    <p>3.呈現總管理處的原本數量點擊即累加總數量 和 這個component自己的data 數量</p>
    <p>總管理處的原本數量點擊即累加總數量為:{{newCount4}}</p>
    <p>這個component自己的data數量為：{{localCountA}}</p>
    <p>4.總管理處的State數量＋component 內的data數量為：{{newCount5}}</p>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default{
  data(){
    return{
      a:125
    }
  },
  computed: {...mapState({
    newCount2: state=>state.newCount2,
    newCount3: state=>state.newCount3,
    newCount4: state=>state.newCount3,
    newCount5(state){
      return state.newCount3+this.a
    }
    }),
    localCountA(){
      return this.a
    }
    },
    methods:{
      addnewCount3(){
        this.$store.commit("newCounter3")
        },
      addnewCount5(){
        this.$store.commit("newCounter5")
      }  
    }
}
</script>