import * as actionTypes from './constants';

const defaultState = {
    balance:0
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_PATH:
            // 展开原有的状态
            return { ...state, balance: action.data}
        default:
            return state
    }
}