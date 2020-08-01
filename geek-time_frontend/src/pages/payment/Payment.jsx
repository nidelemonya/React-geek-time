import React, { memo, useRef } from 'react';
import { Container } from './style';
import { withRouter } from 'react-router'
import './Payment.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../my/store/actionCreators';

function Pay(props) {

    const { brief, balance } = props;
    const { getPaymentDataDispatch } = props;
    const ref = useRef(null);
    console.log(ref.current);
    console.log(brief);
    const handleBack = () => {
        window.history.back();
    }
    const handlePayment = (reduce) => {
        reduce = reduce / 100;
        if (balance < reduce) {
            // alert('你没钱了，穷鬼')
            
            return;
        }
        // console.log('reduce', reduce)
        getPaymentDataDispatch(reduce)
    }
    return (
        <Container>
            <div className="pay">
                <div className="pay-header">
                    <div className="pay-icon">
                        <span className="iconfont" onClick={handleBack}>&#xe571;</span>
                    </div>
                    <div className="pay-title">
                        <span>结算台</span>
                    </div>
                </div>
                {brief.toJS().map((m, i) => {
                return(
                <div className="pay-container" key={i}>
                    <div className="pay-info">
                        <div key={i} className="pay-list">
                            <img src={m.author.avatar} alt={123} />
                            <div className="pay-list-right">
                                <p className="title">{m.title}</p>
                                <p className="item-subtitle">{m.unit} | {m.extra.sub.count}人已学习</p>
                                <p className="item-price">
                                    <span className="price">￥{m.extra.first_promo.price / 100}</span>
                                    <span className="item-count">x1</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div key={i} className="checkout-panel">
                            <div className="checkout-price">
                                <span>总计:</span>
                                <span className="price">￥{m.extra.first_promo.price / 100}</span>
                            </div>
                        </div>
                        <div className="pay-method">
                            <h3 className="pay-method-h3">当前支付方式</h3>
                            <div className="method-list-item">
                                <div>
                                    <span className="iconfont">&#xe613;</span>
                                    <span className="pay-method-text">
                                        <em>余额支付</em>
                                    </span>
                                    <span className="count">(当前余额:￥{balance.toFixed(2)})</span>
                                </div>
                                <div className="checkbox">
                                    <NavLink to={"/user/account/"} activeClassName="selected">
                                        <button className="btn">去充值</button>
                                        {/* <span className="iconfont checked">&#xe6ab;</span> */}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="choose-other-pay">
                                <div className="choose-label">选择其他支付方式</div>
                                <span className="iconfont">&#xe534;</span>
                            </div>
                            <p className="coupon-rules">· 本商品为虚拟内容服务，购买后不支持退换、转让，请斟酌确认。</p>
                        </div>
                        <p className="current-user">
                            <span className="title">当前登录账号：157****2750</span>
                        </p>
                        <div ref = {ref} className="bottom">
                            <div className="bottom-name" 
                            onClick={()=>{
                                handlePayment(m.extra.first_promo.price)
                            }}>￥{m.extra.first_promo.price / 100}确认支付</div>
                        </div></div>
                </div>
                )})}
            </div>
        </Container>
    )
}
const Pays = withRouter(Pay);
// export default Pays;
const mapStateToProps = (state) => ({
    // brief: state.intro.brief,
    // balance: state.user.balance
    brief: state.getIn(['intro','brief']),
    balance: state.getIn(['user','balance']),
})

const mapDispatchToProps = (dispatch) => {
    return {
        getPaymentDataDispatch(data) {
            dispatch(actionTypes.reduceBalance(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Pays))