import { IData } from "@/interface/songUrl";
import http from "@/utils/http";

export async function useSongUrl(id:number){
    const {data}=await http.get<{data:IData[]}>('/song/url',{id:id})
    return data[0];
}