import { axiosInstance } from './config';
export const getLessonsRequest = () => {
    return axiosInstance.get("/all");
}
export const getTrainingRequest = () => {
    return axiosInstance.get("/all");
}