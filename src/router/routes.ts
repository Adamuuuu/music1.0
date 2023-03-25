export const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("@/components/tabber/Tabber.vue"),
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
                
                component: () => import("@/views/home/Home.vue")
            },
            {
                path: "top",
                name: "top",
                component: () => import("@/views/home/top/top.vue")
            },
            {
                path: "playlist_songs",
                name: "playlist_songs",
                component: () => import("@/views/playlist_songs/playlist_songs.vue")
            },
            {
                path: "focus",
                name: "focus",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("@/views/focus/Focus.vue")
            },
            {
                
                path: "playlistall",
                
                name: "playlistall",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("@/views/playlistall/Playlistall.vue")
            },
            {
                
                path: "usercenter",
                
                name: "usercenter",
                meta: {
                    
                    ac: 3
                },
               
                component: () => import("@/views/account/usercenter.vue")
            },
        ]

    },
   

    {
        path: "/404",
        name: "url404",
        component: () => import("@/views/404.vue")
    },
    
    {
        path: "/403",
        name: "url403",
        component: () => import("@/views/403.vue")
    },
    {
        path: "/:pathMath(.*)",
        redirect: '/404'
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/search/search.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/Login.vue")
    },
    
]