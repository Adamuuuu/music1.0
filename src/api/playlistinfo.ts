import http from "@/utils/http";

import { ISongs } from "@/interface/songinfo";

export  async function usePlaylistInfo(id:number){
    const playlist_songs=await http.get<{playlist_songs:ISongs[]}>('/playlist/track/all',{id:id})
    return playlist_songs;
}