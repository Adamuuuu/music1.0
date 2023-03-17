import { Reject } from '@icon-park/vue-next';
import axios,{type AxiosRequestConfig} from 'axios';
//请求的地址
axios.defaults.baseURL=`https://autumnfish.cn/`;

//请求拦截器
axios.interceptors.request.use((config:AxiosRequestConfig|any)=>config);

//响应拦截器

axios.interceptors.response.use(res=>{
    return res  //返回数据信息
},err=>{
    //有错误返回Promise.reject
    return Promise.reject(err)
});

//定义请求对象的类型
interface IHttp{
    get<T>(url:string,params?:unknown):Promise<T>;

}
//新建一个对象
const http:IHttp={
    //对请求的各类型进行封装   发送请求默认有两个传入的参数，第一个是请求的地址  第二个是请求的参数
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios.get(url,{params})
            .then(res=>{
                resolve(res.data)
            })
            .catch(err=>{
                reject(err)
            })
        })

    }
}

export default http