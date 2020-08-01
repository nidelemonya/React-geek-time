import * as actionTypes from './constants';

export const changeBalance = (data) => ({
    type: actionTypes.CHANGE_BALANCE,
    data:data
})

export const changeRecharge = (data) => ({
    type: actionTypes.CHANGE_RECHARGE,
    data: data
})
// 增加余额
export const addBalance = (data) => {
    return ( dispatch, getState ) => {
        //原来的余额加上充值的金币
        let balance = getState().user.balance + data;
        dispatch(changeBalance(balance));
    }
}
//支付完 减掉余额
export const reduceBalance = (data) => {
    return ( dispatch, getState ) => {
        let balance = getState().user.balance - data;
        dispatch(changeBalance(balance));
    }
}
export const getRecharge = (data) => {
    return ( dispatch) => {
        dispatch(changeRecharge(data));
    }
}
