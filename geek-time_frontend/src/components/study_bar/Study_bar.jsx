import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Study_bar.css';

export default function Study_bar(props) {
    // console.log(props)
    // 在 all 的下面 第0个
    const { list_study } = props;
    return (
        <ul class="forum-ul">
            <li class="forum-li">
                <div class="forum-bg">
                    <div class="forum-div">
                        <div class="forum-div-title">Java工程师</div>
                        <div class="forum-div-num">19门课程</div>
                    </div> <img
                        src="https://static001.geekbang.org/resource/image/50/b6/50cac4f8a8e9b600636c0890967113b6.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                        alt=""/>
                    <div class="forum-less"></div>
                </div>
            </li>
        </ul>
    )
}

Study_bar.propTypes = {
    list_study:PropTypes.object.isRequired
}