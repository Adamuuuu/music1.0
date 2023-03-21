export interface Ar {
    id: number;  //歌手id
    name: string;   //歌手姓名
    [proName:string]:any
    
  }
  
  export interface Al {
    id: number;    //专辑id
    name: string;   //专辑姓名
    picUrl: string;   //专辑封面
    [proName:string]:any
  }


export interface ISongs {
    name: string;  //歌曲名称
    ids: number;  //歌曲id
    pst: number;
    t: number;
    ar: Ar[];  //歌手信息
    alia: string[];  //别名列表  第一个别名会显示作为副标题
    pop: number;   //表示歌曲热度
    fee: number;  //  表示是否有版权
    al: Al;  //专辑信息
    dt: number;   //歌曲时长
    [proName:string]:any

}