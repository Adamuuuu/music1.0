import { defineStore } from "pinia"
import { IPlaylist } from "@/interface/playlist"
import { usePlaylist } from "@/api/playlist"

export const usePlaylistStore=defineStore('playlist',{

    
    state:()=>{
        return{
            //返回轮播图接收的数据
         playlists:<IPlaylist[]>{},
        //  getplaylists:Promise<void>
        }
         
    },
    getters:{
    },
    actions:{
        async getplaylists(){
            
            // 发送请求接受接口的返回信息，将信息赋值给playlists:<Iplaylist[]>{}
            const playlists=await usePlaylist()
            console.log("获取成功")
            this.playlists=playlists
            
        }
    }
}
)