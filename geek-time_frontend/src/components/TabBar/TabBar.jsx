import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './TabBar.css';

function TabBar(props) {
    return (
        <div className="tab_bar">
            <div className="tab">
                <span className="tab-icon iconfont icon-faxian"></span>
                <div className="tab-title">发现</div>
            </div>
            <div className="tab">
                <span className="tab-icon iconfont icon-jiangtang"></span>
                <div className="tab-title">讲坛</div>
            </div>
            <div className="tab">
                <span className="tab-icon iconfont icon-faxian"></span>
                <div className="tab-title">部落</div>
            </div>
            <div className="tab">
                <span className="tab-icon iconfont icon-iconxuexi"></span>
                <div className="tab-title">学习</div>
            </div>
            <div className="tab">
                <span className="tab-icon iconfont icon-my"></span>
                <div className="tab-title">我的</div>
            </div>
        </div>
    )
}

TabBar.propTypes = {
    
}

const TabBars =  withRouter(TabBar)
export default TabBars