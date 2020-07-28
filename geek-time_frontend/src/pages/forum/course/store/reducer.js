import * as actionTypes from './constants';

const defaultState = {
    // 一个页面只有一个 loading 值
    // 课程数据
    lessons:[],
    // 训练营数据
    infos:[],
    // 加载中
    enterLoading:true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0, // 请求列表的偏移不是 page，是个数
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LESSONS:
            // 展开原有的状态
            return { ...state, lessons: action.data}
        case actionTypes.CHANGE_INFOS:
            return { ...state, infos: action.data}
        case actionTypes.CHANGE_ENTER_LOADING:
            return { ...state, enterLoading: action.data}
        case actionTypes.CHANGE_LIST_OFFSET:
            return state.set('listOffset', action.data);
        case actionTypes.CHANGE_PULLUP_LOADING:
            return state.set('pullUpLoading', action.data);
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            return state.set('pullDownLoading', action.data);
        default:
            return state
    }
}