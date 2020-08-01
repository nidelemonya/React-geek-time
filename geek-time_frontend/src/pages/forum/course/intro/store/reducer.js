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

// fromJS
// 它的功能是将 JS 对象转换为 immutable 对象。

// toJS
// 和 fromJS 功能刚好相反，用来将 immutable 对象转换为 JS 对象。但是值得注意的是，这个方法并没有在 immutable 库中直接导出，而是需要让 immutable 对象调用。

// get/getIn
// 用来获取 immutable 对象属性。

// set
// 用来对 immutable 对象的属性赋值。

// merge
// 新数据与旧数据对比，旧数据中不存在的属性直接添加，旧数据中已存在的属性用新数据中的覆盖。