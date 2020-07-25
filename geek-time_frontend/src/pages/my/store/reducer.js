import * as actionTypes from './constants';

const defaultState = {
    list:[],
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LIST:
            // 展开原有的状态
            return { ...state, list: action.data}
        default:
            return state
    }
}