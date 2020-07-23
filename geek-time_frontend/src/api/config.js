import axios from 'axios';

// 这里不使用 fetch 因为存在兼容性问题
// 推荐使用 axios 兼容性更好

export const baseUrl = "http://localhost/data"; // 全局的后端 api 前缀

const axiosInstance = axios.create({
    baseURL:baseUrl
})

export { axiosInstance }