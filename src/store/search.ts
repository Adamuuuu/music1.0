import { defineStore } from "pinia"
import { ISongs } from "@/interface/songinfo"
import { useSearch } from "@/api/search"
//歌曲详情
type Obj={
    result:Result[]
}
type Result={
    songs:result_songs[]
}
type result_songs={
    id:number,
    name:string,
    artists:[{
        id:number,
        name:string,
    }]
}
export const useSearchStore=defineStore('result',{
    state:()=>({
        obj:<Obj>{},
        result:<Result>{},
        res:<result_songs[]>{},
        isSearch:0,
        return:{
            result:<Result>{},
            res:<result_songs[]>{},
            songs:<Result>{},
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
            this.result.songs=result.songs
            this.res=this.result.songs
            //此处需要自己写接口
            console.log(this.result.songs)
        },
        
            

    }

})