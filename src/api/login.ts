import http from '@/utils/http';
import { ILogin } from '@/interface/login';

//创建函数   传入请求和参数  获得服务器返回的数据  最后将数据导出
export async function useLogin(key:string){
    const data=await http.get<{data:ILogin}>('/login/qr/create',{key:key})
    return data;
}