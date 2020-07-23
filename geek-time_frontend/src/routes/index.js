// 路由 二级路由
import React from 'react';
import { Redirect } from 'react-router-dom';
import Explore from'../pages/explore/Explore';
import Forum from'../pages/forum/Forum';
import Tribe from '../pages/tribe/Tribe';
import Study from '../pages/study/Study';
import My from '../pages/my/My';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';

export default [
    {
        component:BlankLayout, // 进来 空白布局
        routes: [
            {
                path:'/',
                component: HomeLayout,
                routes:[
                    {
                        path:'/',
                        exact:true,
                        render: () => <Redirect to={"/explore"}/>
                    },
                    {
                        path:'/explore',
                        component: Explore
                    },
                    {
                        path:'/forum',
                        component: Forum
                    },
                    {
                        path:'/tribe',
                        component: Tribe,
                    },
                    {
                        path:'/study',
                        component: Study
                    },
                    {
                        path:'/my',
                        component: My
                    }
                ]
            }
        ]
    }
]