import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Study.css';

function Study(props) {
    return (
        <div className="study">
            {/* 头部 */}
            <div className="study-header">
                <div className="study-title">我的学习</div>
                <span class="iconfont icon-shijian"></span>
            </div>
            
            {/* 中间 */}
            <div className="study-body">
                <div className="study-time">
                    <span className="study-time-long">
                        <span>本周时长</span>
                        <span>0</span>
                        <span>小时</span>
                        <span>2</span>
                        <span>分钟</span>
                    </span>
                </div>
                <div className="study-items">
                    <div className="study-item">
                        <p className="study-item-date">
                            <span>0</span>
                        </p>
                        <p className="study-item-name">笔记</p>
                    </div>
                    <div className="study-item">
                        <p className="study-item-date">
                            <span>0</span>
                        </p>
                        <p className="study-item-name">留言</p>
                    </div>
                    <div className="study-item">
                        <p className="study-item-date">
                            <span>0</span>
                        </p>
                        <p className="study-item-name">收藏</p>
                    </div>
                    <div className="study-item">
                        <p className="study-item-date">
                            <span>0</span>
                        </p>
                        <p className="study-item-name">下载</p>
                    </div>
                </div>

                <div className="study-order">
                    <p className="study-tips">暂无学习内容</p>
                    <button className="study-btn">订阅</button>
                </div>
            </div>
            {/* 底部 */}
            <div className="study-footer">

            </div>
        </div>
    )
}

Study.propTypes = {

}

const Studys = withRouter(Study)
export default Studys