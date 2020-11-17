import TlButton from '../'

export default {
    title:'tl-button',
    component:TlButton
}

export const ordinaryButton = ()=>({
    components:{ TlButton },
    template:`<tl-button>查找</tl-button>`
})