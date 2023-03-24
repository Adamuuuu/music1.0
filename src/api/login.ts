// import http from '@/utils/http';
// import { IBanner } from '@/interface/banner';

// //创建函数   传入请求和参数  获得服务器返回的数据  最后将数据导出
// export async function usekey(){
//     const {key}=await http.get<{key:Ikey[]}>('/login/qr/key')
    
//     return key[0];
// }
// export async function useqr(key:string){
//     const qrs=await http.get<{qr:Iqr[]}>('/login/qr/create',{key:key})
//     return qrs;
// }