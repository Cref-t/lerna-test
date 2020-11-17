import TlFormItem from '../index.js';
import TlInput from '../../input'

export default {
    title:'tl-form-item',
    component:TlFormItem
}

export const ordinalFormItem = ()=>({
    components:{ TlFormItem,TlInput },
    template:`<tl-form-item prop='用户名'>
                <tl-input type='text' v-model='username'>
              </tl-input></tl-form-item>`,
    data(){
        return{
            username:'这是一个用户名'
        }
    }

})