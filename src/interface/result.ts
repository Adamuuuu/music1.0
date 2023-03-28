export interface Result {
    songs:result_songs[]
}
export interface result_songs {
    id:number,
    name:string,
    artists:[{
        id:number,
        name:string,
    }]
}