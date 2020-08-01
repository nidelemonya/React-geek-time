import React, { memo } from 'react'
import { withRouter } from 'react-router'
import { Container, ListContainer } from './style';
import Scroll from '../../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import './Account.css';
import * as actionTypes from '../store/actionCreators'
import { connect } from 'react-redux'

import { accountToUp } from '../../../api/config';
import AccountList from '../../../components/AccountList/AccountList'

function Account(props) {
    const { balance, recharge } = props;
    console.log(balance,recharge); 
    const { getAccountDataDispatch, getRechargeDataDispatch } = props
    console.log(accountToUp)
    //充值金额
    const handleTopUp = () => {
        console.log('recharge',recharge);
        getAccountDataDispatch(recharge)
    }
    const handleSelect = (select) => {
        console.log('parent', select);
        getRechargeDataDispatch(Number(select))
    }

    const handleBack = () => {
        window.history.back()
    }
    return (
        <Container>
            <div className="Account">
                <div className="Account-header">
                    <span className="icon iconfont" onClick={handleBack}>&#xe571;</span>
                    <span className="title">账户</span>
                    <span className="enter">兑换入口</span>
                </div>
                <ListContainer>
                    <Scroll onScroll={forceCheck}>
                        <div>
                            <div className="Account-balance">
                                <div className="Account-number">
                                    <div className="money">
                                        <span className="iconfont">&#xe601;</span>
                                        <span>{balance.toFixed(2)}</span>
                                    </div>
                                    <div className="count">
                                        充值币0.00  |  赠币0.00
                                    </div>
                                    <div className="check">查看明细</div>
                                </div>
                                <div className="Account-img">
                                    <img src="https://static001.geekbang.org/resource/image/91/c8/91737babb23443edf732471fc41e22c8.png" alt="" />
                                </div>
                            </div>
                            <div className="Account-content">
                                <div className="Account-topUp">
                                    <div className="Account-topUp-title">
                                        <span className="title">充值</span>
                                        <span className="name">(  充值金额仅限 Android 系统使用  )</span>
                                    </div>
                                    <div className="Account-topUp-wrap" >
                                        <AccountList topUp_list={accountToUp.list} onSelected={handleSelect}/>
                                    </div>
                                    <div className="Account-topUp-affirm">
                                        <button className="Account-topUp-affirm-btn" onClick={handleTopUp}>确认充值</button>
                                    </div>
                                </div>
                                <div className="Account-explain">
                                    <div className="Account-explain-title">
                                        <div className="name">充值说明</div>
                                    </div>
                                    <div className="Account-explain-detail">
                                        <p>1.充值金额不会过期，不支持退款、提现或转赠他人;</p>
                                        <p>2.因苹果政策，ios 平台和安卓平台的充值余额不支持跨平台使用;</p>
                                        <p>3. iOS App内的充值订单，若您需要开票，请联系苹果客服咨询相关事宜;</p>
                                        <p>4.充值如遇到问题，请关注<span>【极客时间】</span>微信服务号，向我们反馈你的问题，我们会为你解决。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Scroll>
                </ListContainer>
            </div>
        </Container>
    )
}

const Accounts = withRouter(Account)
// export default Accounts

const mapStateToProps = (state) => ({
    // balance: state.user.balance,
    // recharge: state.user.recharge
    balance: state.getIn(['user','balance']),
    recharge: state.getIn(['user','recharge'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAccountDataDispatch(number) {
            dispatch(actionTypes.addBalance(number))
        },
        getRechargeDataDispatch(num) {
            dispatch(actionTypes.getRecharge(num))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Accounts))