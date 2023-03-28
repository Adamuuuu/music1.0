import http from '@/utils/http';
import { IPlaylist } from '@/interface/playlist';

//创建函数   传入请求和参数  获得服务器返回的数据  最后将数据导出
export async function usePlaylist(){
    const playlists=await http.get<{result:IPlaylist[]}>('/personalized',{limit:6})
    return playlists;
}