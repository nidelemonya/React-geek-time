import * as actionTypes from './constants';

const defaultState = {
    // 一个页面只有一个 loading 值
    // 课程数据
    lessons:[],
    // 训练营数据
    training:[],
    // 加载中
    enterLoading:true
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LESSONS:
            // 展开原有的状态
            return { ...state, lessons: action.data}
        case actionTypes.CHANGE_TRAINING_CAMP:
            return { ...state, training: action.data}
        case actionTypes.CHANGE_ENTER_LOADING:
            return { ...state, enterLoading: action.data}
        default:
            return state
    }
}