import { defineStore } from "pinia"
import { ISongs } from "@/interface/songinfo"
import { useSongsinfo } from "@/api/songinfo"

//歌曲详情

export const useSongsinfoStore=defineStore('songsinfo',{
    state:()=>{
        return{
            songs:<ISongs[]>{}
        }
    },
    getters:{

    },
    actions:{
            
         
            

    }

})