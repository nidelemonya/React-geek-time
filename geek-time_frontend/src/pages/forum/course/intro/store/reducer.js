import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    // 简介
    intro: [],
    brief: [],
    articleList: [],
    // 目录列表
    chapterList: [],
    // 推荐列表
    recommendList: [],
    // 评论列表
    commentList: [],
    introLoading: true,
    id:'100017301'
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INTRO:
            // 展开原有的状态
            return state.set('intro',action.data)
        case actionTypes.CHANGE_INTRO_LOADING:
            return state.set('introLoading',action.data)
        case actionTypes.CHANGE_ID:
            return state.set('id',action.data)
        case actionTypes.CHANGE_BRIEF:
            return state.set('brief',action.data)
        case actionTypes.CHANGE_ARTICLE_LIST:
            return state.set('articleList',action.data)
        case actionTypes.CHANGE_CHAPTER_LIST:
            return state.set('chapterList',action.data)
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList',action.data)
        case actionTypes.CHANGE_COMMENT_LIST:
            return state.set('commentList',action.data)
        default:
            return state
    }
}