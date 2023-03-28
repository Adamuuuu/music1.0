import { ISongs } from "./songinfo"
export interface ITop{
    playlist:Playlist,
    [proName:string]:any
}
export interface Playlist{
    tracks:ISongs[],
    [proName:string]:any
}
