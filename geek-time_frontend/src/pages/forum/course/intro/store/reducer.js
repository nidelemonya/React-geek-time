import * as actionTypes from './constants';

const defaultState = {
    // 简介
    intro:[],
    briefList:[],
    articleList:[],
    // 目录列表
    chapterList:[],
    // 推荐列表
    recommendList:[],
    // 评论列表
    commentList:[],
    introLoading:true,
    tab: 'intro',
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_INTRO:
            // 展开原有的状态
            return { ...state, intro: action.data}
        case actionTypes.CHANGE_INTRO_LOADING:
            return { ...state, introLoading: action.data}
        case actionTypes.CHANGE_TAB:
            return { ...state, tab: action.data}
        default:
            return state
    }
}