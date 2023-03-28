import http from '@/utils/http';
import { IBanner } from '@/interface/banner';

//创建函数   传入请求和参数  获得服务器返回的数据  最后将数据导出
export async function useBanner(){
    const banners=await http.get<{banners:IBanner[]}>('/banner',{type:1})
    return banners;
}