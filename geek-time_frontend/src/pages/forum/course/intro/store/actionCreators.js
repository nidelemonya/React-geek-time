// 负责进行数据请求
import * as actionTypes from './constants';
import { getIntroRequest } from '../../../../../api/request'

export const changeIntro = (data) => ({
    type: actionTypes.CHANGE_INTRO,
    // data:data
    data
})

export const changeTab = (data) => ({
    type: actionTypes.CHANGE_TAB,
    data
})

// loading
export const changeIntroLoading = (data) => ({
    type: actionTypes.CHANGE_INTRO_LOADING,
    data
})


export const getIntro = () => {
    // 因为获取数据 是异步操作 所以返回一个函数
    return ( dispatch, getState ) => {
        // console.log(getState())
        getIntroRequest().then(res =>{
            console.log(res);
            const data = res.infos;
            dispatch(changeIntro(data));
            // 拿到数据  IntroLoading 变成false
            dispatch(changeIntroLoading(false));
        }).catch(()=>{
            // 没有正确得到数据 怎么办
            console.log('课程数据传输错误')
        })
    }
}