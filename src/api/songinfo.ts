import http from '@/utils/http';
import { ISongs } from '@/interface/songinfo';

//创建函数获取歌曲详情


export async  function useSongsinfo(id:number)
{
        const songs=await http.get<{songs:ISongs[]}>('/song/detail',{id:id})
        return songs;
}