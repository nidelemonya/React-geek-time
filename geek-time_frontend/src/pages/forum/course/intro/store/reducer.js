import * as actionTypes from './constants';

const defaultState = {
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
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INTRO:
            // 展开原有的状态
            return { ...state, intro: action.data }
        case actionTypes.CHANGE_INTRO_LOADING:
            return { ...state, introLoading: action.data }
        case actionTypes.CHANGE_ID:
            return { ...state, id: action.data }
        case actionTypes.CHANGE_BRIEF:
            return { ...state, brief: action.data }
        case actionTypes.CHANGE_ARTICLE_LIST:
            return { ...state, articleList: action.data }
        case actionTypes.CHANGE_CHAPTER_LIST:
            return { ...state, chapterList: action.data }
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return { ...state, recommendList: action.data }
        case actionTypes.CHANGE_COMMENT_LIST:
            return { ...state, commentList: action.data }
        default:
            return state
    }
}