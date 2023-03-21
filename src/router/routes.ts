export const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("_c/tabber/Tabber.vue"),
        children: [
            //自动跳转的操作
            {
                path: '/',
                redirect: '/home'
            },
            {
             
                path: "home",
                
                name: "home",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("_v/home/Home.vue")
            },
            {
                path: "top",
                name: "top",
                component: () => import("_v/home/top/top.vue")
            },
            {
                path: "playlist_songs",
                name: "playlist_songs",
                component: () => import("_v/playlist_songs/playlist_songs.vue")
            },
            {
                path: "focus",
                name: "focus",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("_v/focus/Focus.vue")
            },
            {
                
                path: "playlistall",
                
                name: "playlistall",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("_v/playlistall/Playlistall.vue")
            },
            {
                
                path: "usercenter",
                
                name: "usercenter",
                meta: {
                    
                    ac: 3
                },
               
                component: () => import("_v/account/usercenter.vue")
            },
        ]

    },
   

    {
        path: "/404",
        name: "url404",
        component: () => import("_v/404.vue")
    },
    
    {
        path: "/403",
        name: "url403",
        component: () => import("_v/403.vue")
    },
    {
        path: "/:pathMath(.*)",
        redirect: '/404'
    },
    {
        path: "/search",
        name: "search",
        component: () => import("_v/search/search.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("_v/login/Login.vue")
    },
    
]