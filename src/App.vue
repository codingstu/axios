<template>
  <div id="app">
    <div>{{result}}</div>
   <h2>Hello</h2>
   <h3>fuze</h3>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'App',
  data(){
    return{
      result:'hello'
    }
  },
  created(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      // console.log(res),
      this.result=res
    })
  }
    
  //https://github.com/codingstu/axios.git
}
</script>
<style>

</style>

