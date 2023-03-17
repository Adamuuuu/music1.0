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
                path: "focus",
                name: "focus",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("_v/focus/Focus.vue")
            },
            {
                
                path: "search",
                
                name: "search",
                meta: {
                   
                    ac: 0
                },
                
                component: () => import("_v/search/Search.vue")
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
        path: "/top",
        name: "top",
        component: () => import("_v/home/top/top.vue")
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
]