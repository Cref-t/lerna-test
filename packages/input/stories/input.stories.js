import TlInput from '../'

export default {
    title:'tl-input',
    component: TlInput,
}

export const text = ()=>({
    components:{TlInput},
    template:`<tl-input type='text' v-model='value'></tl-input>`,
    data(){
        return{
            value:'文本框'
        }
    }
})

export const password = ()=>({
    components:{ TlInput },
    template:`<tl-input type='password' v-model='value'></tl-input>`,
    data(){
        return{
            value:'密码框'
        }
    }
})