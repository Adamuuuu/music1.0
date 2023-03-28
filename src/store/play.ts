
import { defineStore } from 'pinia'

import {  ISongs } from '@/interface/songinfo'
import { useSongUrl } from '@/api/play'
import { useSongsinfo } from '@/api/songinfo'
type List={
    player:string,
    songsname:string,
    list_url:string
}[]
export const usePlayStore = defineStore({
    id: 'player',
    state: () => ({
        audio: new Audio(),
        isPause: false,  
        //是否处于暂停的状态
        songs: <ISongs[]>{},
        playlist:<ISongs[]>{},
        index:0,
        list: [{player:"歌手名",songsname:"歌曲名",list_url:"",pic_url:""}]||undefined,
        return: {
            picUrl: "",
            name: "",
            list:<List>[],    
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
            // this.list.push({player:"",songsname:"",list_url:""})
            
            this.playing(name,songname,url,picUrl)
            this.index++
            if(!this.list.some(item=>item.list_url===url))
                {
                     this.list.push({player:name,songsname:songname,list_url:url,pic_url:picUrl})
                     if(this.index===this.list.length-2)
                     {
                        this.index++
                        console.log("index的值为：",this.index)
                        console.log("len的值为：",this.list.length)
                     }else{
                        this.index=this.list.length-1
                        console.log("index的值为：",this.index)
                        console.log("len的值为：",this.list.length)
                     }
                     
                     console.log("添加成功")
                }

            // this.audio.play()
            //      .then(() => {
            //          this.isPause = true
                     
            //          this.list.push({player:name,songsname:songname,list_url:data.url})
                     
            //      })
                
        },
        //播放成功
        playing(name:string,songname:string,url:string,pic_url:string)
        {
            this.audio.src=url
            // this.list[this.index].list_url
            this.audio.play()
            .then(()=>{
                this.isPause = true
                // if(!this.list.some(item=>item.list_url===url))
                // {
                //      this.list.push({player:name,songsname:songname,list_url:url})
                //      console.log("index的值为：",this.index)
                //      console.log("len的值为：",this.list.length)
                //      console.log("添加成功")
                // }
            })
            if(this.audio.ended)
                {
                   this.next()
                   console.log("歌曲播放完自动播放下一首成功")
                }
            console.log("播放成功")   
        },
        //下一首
        next  ()  {
            this.index++
            if (this.index >= this.list.length) {
              this.index = 1 
            }
            this.playing(this.list[this.index].player,this.list[this.index].songsname,this.list[this.index].list_url,this.list[this.index].pic_url)
            console.log("下一首正常")
        },
        //上一首
        prev  ()  {
            this.index--
            if (this.index < 1) {
              this.index = this.list.length-1 
            }
            this.playing(this.list[this.index].player,this.list[this.index].songsname,this.list[this.index].list_url,this.list[this.index].list_url)
            console.log("上一首正常")
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