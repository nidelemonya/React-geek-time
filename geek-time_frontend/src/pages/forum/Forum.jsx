import React from 'react';
import { withRouter } from 'react-router';
import Tab_bar from '../../components/tab_bar/Tab_bar';
import Title_bar from '../../components/title_bar/Title_bar';
import Study_bar from '../../components/study_bar/Study_bar';
import PropTypes from 'prop-types';
import './Forum.css';

function Forum(props) {
    return (    
        <div className="forum">
            <div className="forum-header">
                <div className="forum-title">
                    <span className="forum-name forum-name-active">课程</span>
                    <span className="forum-name">训练营</span>
                    <span className="forum-name">每日一课</span>
                </div>
                <span className="forum-icon iconfont icon-sousuo"></span>
            </div>
            <div className="forum-center">
                <div className="forum-study">
                    <div className="forum-title1">
                        <Title_bar title="学习路径" name="查看全部"/>
                    </div>
                    <div className="forum-box1">
                        <Study_bar/>
                    </div>
                </div>
                <div className="forum-lesson"></div>
            </div>
            <div className="forum-footer">
                <Tab_bar></Tab_bar>
            </div>
        </div>
    )
}

Forum.propTypes = {
    
}

const Forums =  withRouter(Forum)
export default Forums