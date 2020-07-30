// 获取学习路径和课程方向的数据

import { axiosInstance } from './config';
export const getLessonsRequest = () => {
    return axiosInstance.get("/all");
}

// 获取全部课程的数据
export const getInfoListRequest = count => {
    return axiosInstance.get(`/infos?offset=${count}`);
}

// 获取详情页面的数据
export const getIntroRequest = (id) => {
    // ${id} ${tab}
    return axiosInstance.get(`/intro/${id}/?tab=intro`);
}

export const getBriefRequest = (id) => {
    return axiosInstance.get(`/intro/${id}/?tab=intro`);
}

export const getArticleListRequest = (id) => {
    return axiosInstance.get(`/intro/${id}/?tab=catalog`);
}

export const  getChapterListRequest = (id) => {
    return axiosInstance.get(`/intro/${id}/?tab=catalog`);
}

export const getRecommendListRequest = (id) => {
    return axiosInstance.get(`/intro/${id}/?tab=recommend`);
}

export const getCommentListRequest = (id) => {
    return axiosInstance.get(`/intro/${id}/?tab=comment`);
}