import { axiosInstance } from './config';
export const getLessonsRequest = () => {
    return axiosInstance.get("/all");
}
export const getInfosRequest = () => {
    return axiosInstance.get("/infos");
}