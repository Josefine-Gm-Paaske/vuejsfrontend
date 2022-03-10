<script>
export default {
  // component options
  data(){
    return {
      message: 'Overskrift'
    }
  }
}
</script>

<template>
  <h1>{{message}}</h1>
</template>

<style>
  h1{
    background-color: #369;
    color: white;
    font-family: times new roman;
    font-size: 30px;
    text-align: center;
  }
</style>