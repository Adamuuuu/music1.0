import http from '@/utils/http';
import { IKey } from '@/interface/login_key';

//创建函数   传入请求和参数  获得服务器返回的数据  最后将数据导出
export async function useKey(){
    const key=await http.get<{data:IKey}>('/login/qr/key')
    return key;
}