import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    balance:0,
    recharge: 6
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_BALANCE:
            // 展开原有的状态
            return state.set('balance', action.data)
        case actionTypes.CHANGE_RECHARGE:
            // return { ...state, recharge:action.data}
            return state.set('recharge', action.data)
        default:
            return state
    }
}