import React from 'react';
import { Container } from './style';
import { withRouter } from 'react-router'
import './Payment.css';

function Pay(props) {
    return (
        <Container>
            <div className="pay">
                <div className="pay-header">
                    <div className="pay-icon">
                        <span className="iconfont">&#xe571;</span>
                    </div>
                    <div className="pay-title">
                        <span>结算台</span>
                    </div>
                </div>
                <div className="pay-container">
                    <div className="pay-info">
                        <div className="pay-list">
                            <img src="https://static001.geekbang.org/resource/image/d3/3a/d3a96afa07fbbc5219ffe5e2ccaade3a.jpg?x-oss-process=image/resize,m_fill,h_216,w_164"/>
                            <div className="pay-list-right">
                                <p className="title">如何看懂一幅画</p>
                                <p className="item-subtitle">22讲 | 678人已学习</p>
                                <p className="item-price">
                                    <span className="price">¥ 19.90</span>
                                    <span className="item-count">x1</span>
                                </p>
                            </div> 
                        </div>
                    </div>
                    <div className="checkout-panel">
                        <div className="checkout-price">
                            <span>总计:</span>
                            <span className="price">¥19.90</span>
                        </div>
                    </div>
                    <div className="pay-method">
                        <h3 className="pay-method-h3">当前支付方式</h3>
                        <div className="method-list-item">
                            <div>
                                <span className="iconfont">&#xe614;</span>
                                <span className="pay-method-text">
                                    <em>微信支付</em>
                                </span>
                            </div>
                            <div className="checkbox">
                                <span className="iconfont checked">&#xe6ab;</span>
                            </div>
                        </div>
                        {/* <div className="choose-other-pay">
                            <div className="choose-label">选择其他支付方式</div>
                            <span className="iconfont">&#xe534;</span>
                        </div>
                        <p className="coupon-rules">· 本商品为虚拟内容服务，购买后不支持退换、转让，请斟酌确认。</p> */}
                    </div>
                    {/* <p className="current-user">
                        <span>当前登录账号：157****2750
                        <a className="orange">切换账号</a>
                        </span>
                    </p>  */}
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