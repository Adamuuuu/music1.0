import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { IData } from '@/interface/songUrl'
import { Al, ISongs } from '@/interface/songinfo'
import { useSongUrl } from '@/api/play'
import { useSongsinfo } from '@/api/songinfo'
export const usePlayStore = defineStore({
    id: 'player',
    state: () => ({
        audio: new Audio(),
        isPause: false,  
        //是否处于暂停的状态
        songs: <ISongs[]>{},
        playlist:<ISongs[]>{},
        id: 0,
        picUrl: "0",
        name: '歌手名',
        songname: '歌曲名',
        url:"",
        list: [{player:"歌手名",songsname:"歌曲名",list_url:""}]||undefined,
        e:[0],
        hh:-1,
        tt:-1,
        return: {
            // songs:<ISongs[]>{},
            picUrl: "",
            name: "",
            // songslist: [0]
        }

    }),
    actions: {
        //获得歌曲id并播放歌曲
        async play(id: number) {
            console.log("play")
            // this.tt++
            const data = await useSongUrl(id)
            const songs = await useSongsinfo(id)

            
            this.audio.src=data.url
            const picUrl = songs.songs[0].al.picUrl
            const name = songs.songs[0].ar[0].name
            const songname = songs.songs[0].name
            const dt=songs.songs[0].dt
            const url=data.url
            console.log("获取歌单详情成功")

            
            
            
            this.audio.play()
                 .then(() => {
                     this.isPause = true
                     this.list.push({player:name,songsname:songname,list_url:data.url})
                     
                 })
                
        },
        playing(url:string)
        {
            this.audio.src=url
            this.audio.play()
            .then(()=>{
                this.isPause = true
                if(this.audio.ended)
                {
                   //歌曲播放完之后执行的函数 
                }
            })
            
        },
        
            
       
        //判断歌曲目前是否暂停
        togglePlay() {
            this.isPause = !this.isPause
            if (this.isPause) {
                this.audio.play()

            } else {
                this.audio.pause()
            }
            

         },
       

}
}
)