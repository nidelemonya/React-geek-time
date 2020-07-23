import React from 'react';
// import PropTypes from 'prop-types';
import './ForumBar.css';

export default function ForumBar(props) {
    // const { study_lessons } = props;
    return (
        <ul className="forum-ul">
            <li className="forum-li">
                <div className="forum-bg">
                    <div className="forum-div">
                        <div className="forum-div-title">Java工程师</div>
                        <div className="forum-div-num">19门课程</div>
                    </div> <img
                        src="https://static001.geekbang.org/resource/image/50/b6/50cac4f8a8e9b600636c0890967113b6.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                        alt=""/>
                    <div className="forum-less"></div>
                </div>
            </li>
        </ul>
    )
}

// ForumBar.propTypes = {
//     // list_study:PropTypes.object.isRequired
// }