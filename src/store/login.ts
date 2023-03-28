import {useKey} from '@/api/login_key'
import {defineStore} from 'pinia'
import { IKey } from '@/interface/login_key'
import { ILogin } from '@/interface/login'
import {useLogin} from '@/api/login'


export const useLoginStore=defineStore('login',{
    state:()=>({
        login_key:<IKey>{},
            login:<ILogin>{},
            qrurl:"",
        return:{
            login_key:<IKey>{},
            login:<ILogin>{},
            // qrurl:<string>{}
        }
    }),
    getters:{

    },
    actions:{
        async getlogin()
        {
            const login_key=await useKey()
            const login=await useLogin(login_key.data.unikey)
            // const qrurl=login.data.qrurl
            this.qrurl=login.data.qrurl
            console.log("返回值应该为",this.qrurl)
            console.log(login_key.data.unikey)
            
        }
    }
})