<template>
   <div>
       <input :type="type" :value="value" @input="handleInput">
   </div>
</template>

<script>
export default {
   inheritAttrs: false,
   props:{
      type:{
          type:String,
          default:'text',
      },
      value:{
          type:String
      } 
   },
   methods:{
     handleInput(evt){
        this.$emit('input',evt.target.value); 
        const findParent = parent =>{
            while (parent){
               if(parent.$options.name=='fromItem'){
                   break;
               }
               parent = parent.$parent;
            }
            return parent
        }
      let parent =findParent(this.$parent)  
      if(parent){
         parent.$emit('validate')
      }
     }
   }

}
</script>

<style>

</style>