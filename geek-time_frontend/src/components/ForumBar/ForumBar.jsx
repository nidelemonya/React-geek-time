import React, { useEffect } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import PropTypes from 'prop-types';
import './ForumBar.css';

export default function ForumBar(props) {
    const { lessons_path } = props;
    useEffect(() => {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            speed: 2000,
            roundLengths: true, //防止文字模糊
        })
    }, [])
    // console.log(lessons_path)
    return (
        // 如果为 undefined 返回空节点
        // <ul className="forum-ul">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    lessons_path.list === undefined ?
                        <React.Fragment>
                            <div className="swiper-slide"></div>
                            <div className="swiper-slide"></div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="swiper-slide">
                                <div className="slider-nav">
                                    <li className="forum-li" key={lessons_path.list[0].id}>
                                        <div className="forum-bg">
                                            <div className="forum-div">
                                                <div className="forum-div-title">{lessons_path.list[0].name}</div>
                                                <div className="forum-div-num">{lessons_path.list[0].product_count}门课程</div>
                                            </div>
                                            <img src={lessons_path.list[0].icon} alt="" />
                                            <div className="forum-less"></div>
                                        </div>
                                    </li>
                                    <li className="forum-li" key={lessons_path.list[1].id}>
                                        <div className="forum-bg">
                                            <div className="forum-div">
                                                <div className="forum-div-title">{lessons_path.list[1].name}</div>
                                                <div className="forum-div-num">{lessons_path.list[1].product_count}门课程</div>
                                            </div>
                                            <img src={lessons_path.list[1].icon} alt="" />
                                            <div className="forum-less"></div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-nav">
                                    <li className="forum-li" key={lessons_path.list[2].id}>
                                        <div className="forum-bg">
                                            <div className="forum-div">
                                                <div className="forum-div-title">{lessons_path.list[2].name}</div>
                                                <div className="forum-div-num">{lessons_path.list[2].product_count}门课程</div>
                                            </div>
                                            <img src={lessons_path.list[2].icon} alt="" />
                                            <div className="forum-less"></div>
                                        </div>
                                    </li>
                                    <li className="forum-li" key={lessons_path.list[3].id}>
                                        <div className="forum-bg">
                                            <div className="forum-div">
                                                <div className="forum-div-title">{lessons_path.list[3].name}</div>
                                                <div className="forum-div-num">{lessons_path.list[3].product_count}门课程</div>
                                            </div>
                                            <img src={lessons_path.list[3].icon} alt="" />
                                            <div className="forum-less"></div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </React.Fragment>}
            </div>
        </div>
        // </ul>
    )
}

ForumBar.propTypes = {
    lessons_path: PropTypes.object.isRequired
}