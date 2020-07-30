// 负责进行数据请求
import * as actionTypes from './constants';
import { getIntroRequest, getBriefRequest, getArticleListRequest, getChapterListRequest, getCommentListRequest, getRecommendListRequest } from '../../../../../api/request'

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
export const changeBrief = (data) => ({
    type: actionTypes.CHANGE_BRIEF,
    data
})
export const changeArticleList = (data) => ({
    type: actionTypes.CHANGE_ARTICLE_LIST,
    data
})
export const changeChapterList = (data) => ({
    type: actionTypes.CHANGE_CHAPTER_LIST,
    data
})
export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})
export const changeCommentList = (data) => ({
    type: actionTypes.CHANGE_COMMENT_LIST,
    data
})

export const getIntro = (id) => {
    // 因为获取数据 是异步操作 所以返回一个函数
    return ( dispatch, getState ) => {
        // console.log(getState())
        getIntroRequest(id).then(res =>{
            // console.log(res);
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

export const getBrief = (id) => {
    return ( dispatch, getState ) => {
        getBriefRequest(id).then(res =>{
            const data = res.infos;
            dispatch(changeBrief(data));
        }).catch(()=>{
            console.log('简介数据传输错误')
        })
    }
}
export const getArticleList = (id) => {
    return ( dispatch, getState ) => {
        getArticleListRequest(id).then(res =>{
            const data = res.infos;
            dispatch(changeArticleList(data));
        }).catch(()=>{
            console.log('文章列表数据传输错误')
        })
    }
}
export const getChapterList = (id) => {
    return ( dispatch, getState ) => {
        getChapterListRequest(id).then(res =>{
            const data = res.infos;
            dispatch(changeChapterList(data));
        }).catch(()=>{
            console.log('目录列表数据传输错误')
        })
    }
}
export const getRecommendList = (id) => {
    return ( dispatch, getState ) => {
        getRecommendListRequest(id).then(res =>{
            const data = res.infos;
            dispatch(changeRecommendList(data));
        }).catch(()=>{
            console.log('推荐列表数据传输错误')
        })
    }
}
export const getCommentList = (id) => {
    return ( dispatch, getState ) => {
        getCommentListRequest(id).then(res =>{
            const data = res.infos;
            dispatch(changeCommentList(data));
        }).catch(()=>{
            console.log('评论列表数据传输错误')
        })
    }
}