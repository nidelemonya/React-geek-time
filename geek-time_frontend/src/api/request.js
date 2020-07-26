import { axiosInstance } from './config';
export const getLessonsRequest = () => {
    return axiosInstance.get("/all");
}
export const getInfoListRequest = () => {
    return axiosInstance.get("/infos");
}