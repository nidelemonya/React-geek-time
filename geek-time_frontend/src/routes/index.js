// 路由 二级路由
// React 自带路由懒加载
import React, { lazy, Suspense} from 'react';
import { Redirect } from 'react-router-dom';
// import Explore from'../pages/explore/Explore';
// import Forum from'../pages/forum/Forum';
// import Tribe from '../pages/tribe/Tribe';
// import Study from '../pages/study/Study';
// import My from '../pages/my/My';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';

// 懒加载 不会直接引入
const ExploreComponent = lazy(()=> import ('../pages/explore/Explore'))
const ForumComponent = lazy(()=> import ('../pages/forum/Forum'))
const TribeComponent = lazy(()=> import ('../pages/tribe/Tribe'))
const StudyComponent = lazy(()=> import ('../pages/study/Study'))
const MyComponent = lazy(()=> import ('../pages/my/My'))

// 进行性能优化 懒加载
const SyspenseComponent = Component => props => {
    return (
        // fallback 是一个回滚事件
        <Suspense fallback= {null}>
            <Component {...props}>
            </Component>
        </Suspense>
    )
}

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
                        // component: Explore
                        component:SyspenseComponent(ExploreComponent)
                    },
                    {
                        path:'/forum',
                        // component: Forum
                        component:SyspenseComponent(ForumComponent)
                    },
                    {
                        path:'/tribe',
                        // component: Tribe,
                        component:SyspenseComponent(TribeComponent)
                    },
                    {
                        path:'/study',
                        // component: Study
                        component:SyspenseComponent(StudyComponent)
                    },
                    {
                        path:'/my',
                        // component: My
                        component:SyspenseComponent(MyComponent)
                    }
                ]
            }
        ]
    }
]