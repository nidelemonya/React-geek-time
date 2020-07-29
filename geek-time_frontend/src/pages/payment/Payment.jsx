import React from 'react';
import { Container } from './style';
import { withRouter } from 'react-router'
import './Payment.css';

function Pay(props) {
    return (
        <Container>
            <div className="pay">
                <div className="pay-header">
                    <span className="iconfont">&#xe571;</span>
                    <h3 className="title">结算台</h3>
                </div>
                <div className="pay-container">
                    {/* <div className="pay-info">
                    <div className="pay-list">
                        <img src="https://static001.geekbang.org/resource/image/99/b3/99e02ba6abf8e09dyy6d1d7951489ab3.jpg?x-oss-process=image/resize,m_fill,h_160,w_160" alt="cover" />
                        <span>如何看懂一幅画</span>
                        <span className="item-subtitle">22讲 | 678人已学习</span>
                        <span className="item-price">
                            <div className="price iconfont">¥ 19.90</div>
                            <span className="item-count">x1</span>
                        </span>
                    </div>
                </div>
                <div className="checkout-panel">
                    <div className="checkout-price">
                        <span>总计:</span>
                        <span className="price">
                            <span className="iconfont">¥</span>
                            19.90
                        </span>
                    </div>
                </div>
                <div className="pay-method">
                    <h3 className="pay-method-h3">当前支付方式</h3>
                    <div className="method-list-item">
                        <span>
                            <span className="iconfont"></span>
                            <div className="pay-method-text">
                                <em>微信支付</em>
                            </div>
                        </span>
                        <div className="checkbox">
                            <span className="iconfont checked"></span>
                        </div>
                    </div>
                    <div className="choose-other-pay">
                        <div className="choose-label">选择其他支付方式</div>
                        <span className="iconfont"></span>
                    </div>
                    <p className="coupon-rules">· 本商品为虚拟内容服务，购买后不支持退换、转让，请斟酌确认。</p>
                </div>
                <p className="current-user">
                    <span>当前登录账号：157****2750
                        <a className="orange">切换账号</a>
                    </span>
                </p> */}
                    <div className="bottom">
                        <div className="bottom-name">¥19.90 确认支付</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
const Pays = withRouter(Pay);
export default Pays;