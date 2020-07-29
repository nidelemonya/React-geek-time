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
export const getIntroRequest = (id, tab) => {
    // ${id} ${tab}
    return axiosInstance.get(`/intro/${100056201}/?tab=${'comment'}`);
}