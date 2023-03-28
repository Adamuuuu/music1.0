import http from "@/utils/http";

import { ISongs } from "@/interface/songinfo";
type Obj={
    result:Result[]
}
type Result={
    songs:result_songs[]
}
type result_songs={
    id:number,
    name:string,
    artists:[{
        id:number,
        name:string,
    }]
}
export  async function useSearch(keywords:string){
    const result=await http.get<{result:Result}>('/search',{keywords:keywords})
    return result.result;
}