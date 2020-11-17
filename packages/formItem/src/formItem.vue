<template>
    <div>
        <label>{{label}}</label>
        <p v-if="errMessage">{{errMessage}}</p>
        <slot></slot>
    </div>
</template>

<script>
import asyncValidator from 'async-validator';
export default {
    name:'fromItem',
    data(){
        return{
            errMessage:''
        }
    },
    props:{
        label:{
            type:String,
        },
        prop:{
            type:String,
        }
    },
    inject:['form'],
    mounted(){  
      this.$on('validate',()=>{
          this.validates();
      })
    },
    methods:{
        validates(){
          console.log('执行了')
          console.log(this.prop);  
           //若是没有传入prop,则不需要进行校验 
          if(!this.prop) return
          const value = this.form.user[this.prop];
          const rules = this.form.rules[this.prop];
          const descriptor = {[this.prop]:rules};
          
          const validator = new asyncValidator(descriptor);
          
          validator.validate({[this.prop]:value},(error,fileds)=>{
              if(error){
                  console.log(error);
                  console.log(fileds)
                  this.errMessage=error[0].message;
              }
              else{
                  this.errMessage=''
              }
          })

        }
    }
}
</script>

<style>

</style>