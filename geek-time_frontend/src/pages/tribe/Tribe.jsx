import React from 'react';
// import PropTypes from 'prop-types';
import './Tribe.css';

function Tribe(props) {
    return (
        <div className="tribe">
            <div className="tribe-header">
                <div className="tribe-title">
                    <span className="tribe-name tribe-name-active">关注</span>
                    <span className="tribe-name">全部</span>
                    <span className="tribe-name">精华</span>
                </div>
                <div className="tribe-icon ">
                    <img src="https://static001.geekbang.org/account/avatar/00/1e/c8/cd/723dd9f9.jpg?x-oss-process=image/resize,m_fill,h_142,w_142" alt=""></img>
                </div>
            </div>
            <div className="tribe-body">
                <div className="tribe-container">
                    <div className="tribe-like">
                        <div className="tribe-like-img">
                            <img src="https://static001.geekbang.org/static/social/img/follow.16e1bf3d.png" alt=""/>
                        </div>
                        <p>快来关注你喜欢的频道吧</p>
                    </div>
                    <div className="tribe-attention">
                        <div className="tribe-item">
                            <div className="tribe-item-left">
                                <div className="tribe-avatar">
                                    <img src="https://static001.geekbang.org/resource/image/62/92/6295bf6890bff742b2048727d71e5192.png?x-oss-process=image/resize,m_fill,h_75,w_75/auto-orient,1" alt=""/>
                                </div>
                                <div className="tribe-title">
                                    AI和大数据
                                </div>
                            </div>
                            <div className="tribe-item-addBtn">
                                <a href="#">
                                    <span>+</span>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                        <div className="tribe-item">
                            <div className="tribe-item-left">
                                <div className="tribe-avatar">
                                    <img src="https://static001.geekbang.org/resource/image/c2/05/c2433b654c13e10c99192609b3843f05.png?x-oss-process=image/resize,m_fill,h_75,w_75/auto-orient,1" alt=""/>
                                </div>
                                <div className="tribe-title">
                                    极客时间
                                </div>
                            </div>
                            <div className="tribe-item-addBtn">
                                <a href="#">
                                    <span>+</span>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                        <div className="tribe-item">
                            <div className="tribe-item-left">
                                <div className="tribe-avatar">
                                    <img src="https://static001.geekbang.org/resource/image/35/42/35acf6b9cc07034870d64dd4a2615942.png?x-oss-process=image/resize,m_fill,h_75,w_75/auto-orient,1" alt=""/>
                                </div>
                                <div className="tribe-title">
                                    我爱读书
                                </div>
                            </div>
                            <div className="tribe-item-addBtn">
                                <a href="#">
                                    <span>+</span>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                        <div className="tribe-item">
                            <div className="tribe-item-left">
                                <div className="tribe-avatar">
                                    <img src="https://static001.geekbang.org/resource/image/de/32/defdd8c99232841e0f6b2d0c2148b832.png?x-oss-process=image/resize,m_fill,h_75,w_75/auto-orient,1" alt=""/>
                                </div>
                                <div className="tribe-title">
                                    聊聊架构
                                </div>
                            </div>
                            <div className="tribe-item-addBtn">
                                <a href="#">
                                    <span>+</span>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                        <div className="tribe-item">
                            <div className="tribe-item-left">
                                <div className="tribe-avatar">
                                    <img src="https://static001.geekbang.org/resource/image/8e/2e/8e6277b1384096306c5ab4051e288a2e.jpg?x-oss-process=image/resize,m_fill,h_75,w_75/auto-orient,1" alt=""/>
                                </div>
                                <div className="tribe-title">
                                    每日一课问题池
                                </div>
                            </div>
                            <div className="tribe-item-addBtn">
                                <a href="#">
                                    <span>+</span>
                                    <span>关注</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tribe-btn">
                        <a href="#">查看全部频道</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tribe