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
                "id": 1,
                "iconUrl": "\ue606",
                "name": "账户",
                "count": "0.0"
            },
            {
                "id": 2,
                "iconUrl": "\ue6ce",
                "name": "我的课程",
                "count": ""
            },
            {
                "id": 3,
                "iconUrl": "\ue677",
                "name": "我的订单",
                "count": ""
            }
        ],
        "tab2": [
            {
                "id": 1,
                "iconUrl": "\ue620",
                "name": "商城订单",
                "count": ""
            },
            {
                "id": 2,
                "iconUrl": "\ue62b",
                "name": "我的拼团",
                "count": ""
            },
            {
                "id": 3,
                "iconUrl": "\ue654",
                "name": "我的证书",
                "count": ""
            }
        ],
        "tab3": [
            {
                "id": 1,
                "iconUrl": "\ue664",
                "name": "我的每日一课",
                "count": ""
            }
        ],
        "tab4": [
            {
                "id": 1,
                "iconUrl": "\ue65d",
                "name": "礼券",
                "count": "2"
            },
            {
                "id": 2,
                "iconUrl": "\ue6ad",
                "name": "课程赠送",
                "count": ""
            },
            {
                "id": 3,
                "iconUrl": "\ue69f",
                "name": "分享有赏",
                "count": ""
            },
            {
                "id": 4,
                "iconUrl": "\ue608",
                "name": "邀请好友",
                "count": "得30元"
            },
            {
                "id": 5,
                "iconUrl": "\ue603",
                "name": "关注服务号领币",
                "count": ""
            }
        ],
        "tab5": [
            {
                "id": 1,
                "iconUrl": "\ue60e",
                "name": "帮助与反馈",
                "count": ""
            },
            {
                "id": 2,
                "iconUrl": "\ue617",
                "name": "设置",
                "count": ""
            }
        ]
}
