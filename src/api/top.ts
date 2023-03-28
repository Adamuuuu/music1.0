import http from '@/utils/http';
import { ISongs } from '@/interface/songinfo';
import {ITop,Playlist} from '@/interface/top'
//创建函数获取歌曲详情


export async  function useTopinfo()
{
        const top=await http.get<{playlist:Playlist}>('/playlist/detail',{id:3778678})
        console.log("获取排行榜数据成功")
        return top;
}