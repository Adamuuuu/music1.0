import { ref ,reactive} from 'vue'
import {defineStore} from 'pinia'
import {IData} from '@/interface/songUrl'
import { Al, ISongs } from '@/interface/songinfo'
import {useSongUrl} from '@/api/play'
import { useSongsinfo } from '@/api/songinfo'
export const usePlayStore=defineStore({
    id:'player',
    state:()=>({
        audio:new Audio(),
        isPause:false,  //是否处于暂停的状态
        
        return:{
            songs:<ISongs[]>{},
            picUrl:<string>{}
        }

    }),
    actions:{
        //获得歌曲id并播放歌曲
        async play(id:number){
            console.log("play")
            const data=await useSongUrl(id)
            this.audio.src=data.url
         
            this.audio.play()
            .then(()=>{
                this.isPause=true
            })    
        },
        // async getSongsinfo(id:number){
        //     const songs=await useSongsinfo(id)
        //     const picUrl=songs.songs.al.picUrl
            
        // },
        //判断歌曲目前是否暂停
        togglePlay(){
            this.isPause=!this.isPause
            if(this.isPause)
            {
                this.audio.play()
            }else{
                this.audio.pause()
            }
            
        },
        
    }
})