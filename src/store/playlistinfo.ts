import { defineStore } from "pinia"
import { Ar, ISongs } from "@/interface/songinfo"
import { usePlaylistInfo } from "@/api/playlistinfo"

//歌曲详情

export const usePlaylistInfoStore=defineStore('playlistinfo',{
    state:()=>{
        
        return{
            playlistinfo:<ISongs[]>{},
            songs:<ISongs[]>{},
            arname:String,
            ar:<Ar[]>{}
        }
    },
    getters:{

    },
    actions:{
            
        async getplaylistinfo(id:number){
            
            // 发送请求接受接口的返回信息，将信息赋值给playlists:<Iplaylist[]>{}
            const playlistinfo=await usePlaylistInfo(id)
            console.log("获取歌单列表成功")
            this.playlistinfo=playlistinfo
            this.ar=playlistinfo.songs[0].ar
            
        }
            

    }

})