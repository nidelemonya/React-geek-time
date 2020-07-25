// 路由 二级路由
// React 自带路由懒加载
import React, { lazy, Suspense} from 'react';
import { Redirect } from 'react-router-dom';
// import Explore from'../pages/explore/Explore';
// import Forum from'../pages/forum/Forum';
// import Tribe from '../pages/tribe/Tribe';
// import Study from '../pages/study/Study';
// import My from '../pages/My/My';
// import Account from '../pages/account/Account';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
import ForumLayout from '../layouts/ForumLayout';

// 懒加载 不会直接引入
const ExploreComponent = lazy(()=> import ('../pages/explore/Explore'))
const ForumComponent = lazy(()=> import ('../pages/forum/course/Forum'))
const TribeComponent = lazy(()=> import ('../pages/tribe/Tribe'))
const StudyComponent = lazy(()=> import ('../pages/study/Study'))
const MyComponent = lazy(()=> import ('../pages/my/My'))
const AccountComponent = lazy(() => import ('../pages/my/account/Account'))
// const DetailComponent = lazy(() => import ('../pages/forum/course/detail/Detail'))
const CampComponent= lazy(()=> import ('../pages/forum/camp/Camp'))
// const PayComponent= lazy(() => import ('../pages/forum/course/pay/Pay'))
const DayComponent = lazy(()=> import ('../pages/forum/day/Day'))

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
                        component: ForumLayout,
                        routes:[
                            {
                                path:'/forum',
                                exact:true,
                                render: () => <Redirect to={"/forum/course"} />
                            },
                            {
                                path:'/forum/course',
                                component:SyspenseComponent(ForumComponent),
                            },
                            //     routes:[
                            //         {
                            //             path:'/forum/course/detail',
                            //             component:SyspenseComponent(DetailComponent)
                            //         },
                            //         {
                            //             path:'/forum/course/pay',
                            //             component:SyspenseComponent(PayComponent)
                            //         }
                            //     ]
                            // },
                            {
                                path:'/forum/camp',
                                component:SyspenseComponent(CampComponent)
                            },
                            {
                                path:'/forum/day',
                                component:SyspenseComponent(AccountComponent)
                            },
                        ]
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
                        path:'/user', 
                        component:BlankLayout,
                        routes:[
                            {
                                path:'/user',
                                exact:true,
                                render: () => <Redirect to={"/user/detail"} />
                            },
                            {
                                path:'/user/detail',
                                component:SyspenseComponent(MyComponent),
                            },
                            {
                                path:'/user/account',
                                component:SyspenseComponent(AccountComponent),
                            }
                        ]
                    }
                ]
            }
        ]
    }
]