// 负责进行数据请求
import * as actionTypes from './constants';
import { getLessonsRequest, getInfosRequest} from '../../../../api/request'

export const changeLessons = (data) => ({
    type: actionTypes.CHANGE_LESSONS,
    data:data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data:data
})

export const changeInfos = (data) => ({
    type: actionTypes.CHANGE_INFOS,
    data:data
})


// 获取课程数据
export const getLessons = () => {
    // 因为获取数据 是异步操作 所以返回一个函数
    return ( dispatch ) => {
        getLessonsRequest().then(data =>{
            dispatch(changeLessons(data));
            // 拿到数据  EnterLoading 变成false
            dispatch(changeEnterLoading(false));
        }).catch(()=>{
            // 没有正确得到数据 怎么办
            console.log('课程数据传输错误')
        })
    }
}

export const getInfos = () => {
    return ( dispatch ) => {
        getInfosRequest().then(data => {
            // console.log(data);
            dispatch(changeInfos(data));
            // 拿到数据  EnterLoading 变成false
            dispatch(changeEnterLoading(false));
        })
        // 如果拿到错误的数据
        .catch(() => {
            console.log('训练营数据传输错误')
        })
    }
}