import http from "@/utils/http";

import { ISongs } from "@/interface/songinfo";

export  async function useSearch(keywords:string){
    const result=await http.get<{result:ISongs[]}>('/search',{keywords:keywords})
    return result;
}