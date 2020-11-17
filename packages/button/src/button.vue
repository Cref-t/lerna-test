<template>
  <div>
      <button @click="clickMe"><slot></slot></button>
  </div>
</template>

<script>
export default {
     methods:{
       clickMe(evt){
          evt.preventDefault(); 
          this.$emit('click',evt)
        }  
}
}
</script>

<style>

</style>