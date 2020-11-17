import TlForm from '../'
import TlButton from '../../button'
import TlFormItem from '../../formItem'
import TlInput from '../../input'

export default {
    title:'tl-form',
    component:TlForm,
}

export const loginForm = ()=>({
    components:{ TlForm,TlButton,TlFormItem,TlInput},
    template:`<tl-form :model="user" :rules="rules">
                 <tl-form-item label='用户名' prop='username'>
                     <tl-input :value="user.username"  @input="user.username=$event"></tl-input>
                 </tl-form-item>
                 <tl-form-item label='密码' prop='password'>
                     <tl-input type='password' v-model="user.password"></tl-input>
                 </tl-form-item>
                 <tl-form-item >
                     <tl-button @click='test'>按钮</tl-button>
                 </tl-form-item >  
              </tl-form>`,
    data(){
      return{
        user: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {
                required: true,
                message: '请输入用户名'
              }
            ],
            password: [
              {
                required: true,
                message: '请输入密码'
              },
              {
                min: 6,
                max: 12,
                message: '请输入6-12位密码'
              }
            ]
          }
      }
    },
    methods: {
        test(){
            console.log('点击了按钮')
        }
    }          
})