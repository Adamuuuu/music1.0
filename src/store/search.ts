import { defineStore } from "pinia"
import { ISongs } from "@/interface/songinfo"
import { useSearch } from "@/api/search"
//歌曲详情

export const useSearchStore=defineStore('result',{
    state:()=>({
        result:<ISongs[]>{},
        songs:<ISongs[]>{},
        isSearch:0,
        return:{
            result:<ISongs[]>{},
            songs:<ISongs[]>{},
            isSearch:true,
            
        }
    }),
    getters:{

    },
    actions:{
            
        async getresult(keywords:string){
            
            // 发送请求接受接口的返回信息，将信息赋值给playlists:<Iplaylist[]>{}
            const result=await useSearch(keywords)
            console.log("获取搜索结果成功")
            this.isSearch=1
            this.result=result
            
        },
        
            

    }

})