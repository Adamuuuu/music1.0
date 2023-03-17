import { ref ,reactive} from 'vue'
import {defineStore} from 'pinia'
import {IBanner} from '@/interface/banner'
import {useBanner}  from '@/api/banner'

//第一种写法
// export const useBannerStore=defineStore('banner',()=>{
    
//     const banners=ref<IBanner[]>([]);
//     //获取请求调用geiBanners函数
//     const getBanners=async()=>{
//         banners.value =await useBanner()
//     };
//     return {
//         banners,
//         //获取
//         getBanners
//     }
// })


//第二种写法

export const useBannerStore=defineStore('banner',{

    
    state:()=>{
        return{
            //返回轮播图接收的数据
         banners:<IBanner[]>{},
        //  getBanners:Promise<void>
        }
         
    },
    getters:{
    },
    actions:{
        async getBanners(){
            
            // 发送请求接受接口的返回信息，将信息赋值给banners:<IBanner[]>{}
            const banners=await useBanner()
            console.log("获取成功")
            this.banners=banners
            
        }
    }
}
)