import axios from 'axios';

// 这里不使用 fetch 因为存在兼容性问题
// 推荐使用 axios 兼容性更好

export const baseUrl = "http://localhost/data"; // 全局的后端 api 前缀

const axiosInstance = axios.create({
    baseURL:baseUrl
})

// 回复处理
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
)

export { axiosInstance }

export const iconSet = {
        tab1: [
            {
                id: 1,
                iconUrl: "\ue605",
                name: "账户",
                count: "0.0",
                href:'/user/account',
            },
            {
                id: 2,
                iconUrl: "\ue61d",
                name: "我的课程",
                href:'/user/course',
            },
            {
                id: 3,
                iconUrl: "\ue677",
                name: "我的订单",
                href:'/user/order',
                
            }
        ],
        tab2: [
            {
                id: 1,
                iconUrl: "\ue620",
                name: "商城订单",
                href:'/user',
            },
            {
                id: 2,
                iconUrl: "\ue62b",
                name: "我的拼团",
                href:'/user',
            },
            {
                id: 3,
                iconUrl: "\ue654",
                name: "我的证书",
                href:'/user',
            }
        ],
        tab3: [
            {
                id: 1,
                iconUrl: "\ue664",
                name: "我的每日一课",
                href:'/user',
            }
        ],
        tab4: [
            {
                id: 1,
                iconUrl: "\ue61f",
                name: "礼券",
                count: "2",
                href:'/user',
            },
            {
                id: 2,
                iconUrl: "\ue6ad",
                name: "课程赠送",
                href:'/user',
            },
            {
                id: 3,
                iconUrl: "\ue60c",
                name: "分享有赏",
                href:'/user',
            },
            {
                id: 4,
                iconUrl: "\ue608",
                name: "邀请好友",
                count: "得30元",
                href:'/user',
            },
            {
                id: 5,
                iconUrl: "\ue60d",
                name: "关注服务号领币",
                href:'/user',
            }
        ],
        tab5: [
            {
                id: 1,
                iconUrl: "\ue60e",
                name: "帮助与反馈",
                href:'/user',
            },
            {
                id: 2,
                iconUrl: "\ue616",
                name: "设置",
                href:'/user',
            }
        ]
}


export const accountToUp = {
        list: [
            {
                "id": 1,
                "iconUrl": "\ue601",
                "number": "6",
                "count": "￥6",
                "checked":false
            },
            {
                "id": 2,
                "iconUrl": "\ue601",
                "number": "12",
                "count": "￥12",
                "checked":false
            },
            {
                "id": 3,
                "iconUrl": "\ue601",
                "number": "68",
                "count": "￥68",
                "checked":false
            },
            {
                "id": 4,
                "iconUrl": "\ue601",
                "number": "108",
                "count": "￥108",
                "checked":false
            },
           
            {
                "id": 5,
                "iconUrl": "\ue601",
                "number": "218",
                "count": "￥218",
                "checked":false
            },
            {
                "id": 6,
                "iconUrl": "\ue601",
                "number": "318",
                "count": "￥318",
                "checked":false
            },
            {
                "id": 7,
                "iconUrl": "\ue601",
                "number": "418",
                "count": "￥418",
                "checked":false
            },
            {
                "id": 8,
                "iconUrl": "\ue601",
                "number": "648",
                "count": "￥648",
                "checked":false
            },
            {
                "id": 9,
                "iconUrl": "\ue601",
                "number": "998",
                "count": "￥998",
                "checked":false
            },
        ]}