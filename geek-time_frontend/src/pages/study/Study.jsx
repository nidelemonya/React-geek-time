import React from 'react';
import { withRouter } from 'react-router';
import Scroll from '../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import { ListContainer } from './style';
// import PropTypes from 'prop-types';
import './Study.css';

function Study(props) {
    const studyOrderBtn = () => {
        props.history.push('/forum');
    }
    return (
        <div className="study">
            {/* 头部 */}
            <div className="study-header">
                <div className="study-title">我的学习</div>
                <span className="iconfont">&#xe632;</span>
            </div>

            {/* 中间 */}

            <div className="study-body">
                <ListContainer>
                    <Scroll onScroll={forceCheck}>
                        <div className="study-items">
                            <div className="study-time">
                                <div className="study-time-long">
                                    <span>本周时长</span>
                                    <span className='yellow-num'>0</span>
                                    <span>小时</span>
                                    <span className='yellow-num'>2</span>
                                    <span>分钟</span>
                                    <span className="iconfont">&#xe534;</span>
                                </div>
                            </div>
                            <div className="study-bars">
                                <div className="study-item">
                                    <div className="study-item-date">0</div>
                                    <div className="study-item-name">笔记</div>
                                </div>
                                <div className="study-item">
                                    <div className="study-item-date">0</div>
                                    <div className="study-item-name">留言</div>
                                </div>
                                <div className="study-item">
                                    <div className="study-item-date">0</div>
                                    <div className="study-item-name">收藏</div>
                                </div>
                                <div className="study-item">
                                    <div className="study-item-date">0</div>
                                    <div className="study-item-name">下载</div>
                                </div>
                            </div>
                        </div>

                        <div className="study-order">
                            <p className="study-tips">暂无学习内容</p>
                            <button onClick={studyOrderBtn} className="study-btn">订阅</button>
                        </div>
                    </Scroll>
                </ListContainer>
            </div>


        </div>
    )
}

Study.propTypes = {

}

const Studys = withRouter(Study)
export default Studys