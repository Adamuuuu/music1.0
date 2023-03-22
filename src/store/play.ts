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
        isPause: false,  //是否处于暂停的状态
        songs: <ISongs[]>{},
        playlist:<ISongs[]>{},
        id: 0,
        picUrl: "0",
        name: '歌手名',
        songname: '歌曲名',
        songslist: [0],
        
        list:[""],
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
            const data = await useSongUrl(id)
            const songs = await useSongsinfo(id)
            this.audio.src = data.url
            const picUrl = songs.songs[0].al.picUrl
            const name = songs.songs[0].ar[0].name
            const songname = songs.songs[0].name
            // console.log(picUrl)
            this.audio.play()
                .then(() => {
                    this.isPause = true
                    this.picUrl = picUrl
                    this.name = name
                    this.songname = songname
                    //播放列表设置
                    //添加歌曲
                    //删除歌曲
                    //给歌曲去重
                    //上一首歌曲下一首歌曲
                    this.tt++
                    console.log("播放成功")
                    this.list[this.tt]=this.name
                    // this.list[this.tt].songsname=songname
                    console.log(this.tt)
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
        addsongs() {
            
            
        }

    }
})