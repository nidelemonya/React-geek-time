import { axiosInstance } from './config';
export const getLessonsRequest = () => {
    return axiosInstance.get("/all");
}
export const getInfoListRequest = count => {
    return axiosInstance.get(`/infos?offset=${count}`);
}