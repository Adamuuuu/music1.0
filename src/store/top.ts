import { defineStore } from "pinia"
import { ISongs } from '@/interface/songinfo';
import {ITop} from '@/interface/top'
import { useTopinfo } from "@/api/top"

//歌曲详情
type Playlist={
    songs:ISongs[]
}
export const useTopStore=defineStore('top',{
    state:()=>({
        songs:<ISongs[]>{},
        return:{
            top:<ITop[]>{},
            songs:<ISongs[]>{},
            
        }
    }),
    getters:{

    },
    actions:{
            
        async gettop(){
            
            // 发送请求接受接口的返回信息，将信息赋值给playlists:<Iplaylist[]>{}
            const top=await useTopinfo()
            console.log("获取排行榜列表成功")
            console.log(top.playlist.tracks)
            this.songs=top.playlist.tracks

            // this.ar=top.songs[0].ar
            
        }
            

    }

})