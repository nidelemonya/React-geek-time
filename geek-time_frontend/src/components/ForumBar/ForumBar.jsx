import React, { useEffect } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import PropTypes from 'prop-types';
import './ForumBar.css';

export default function ForumBar(props) {
    const { pathList } = props;
    useEffect(() => {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            speed: 2000,
            roundLengths: true, //防止文字模糊
        })
    }, [])
    // console.log(pathList)
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                { pathList.toJS().length === 0 ? <React.Fragment>
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="swiper-slide">
                            <div className="slider-nav">
                                <li className="forum-li" key={pathList.toJS()[0].id}>
                                    <div className="forum-bg">
                                        <div className="forum-div">
                                            <div className="forum-div-title">{pathList.toJS()[0].name}</div>
                                            <div className="forum-div-num">{pathList.toJS()[0].product_count}门课程</div>
                                        </div>
                                        <img src={pathList.toJS()[0].icon} alt="" />
                                        <div className="forum-less"></div>
                                    </div>
                                </li>
                                <li className="forum-li" key={pathList.toJS()[1].id}>
                                    <div className="forum-bg">
                                        <div className="forum-div">
                                            <div className="forum-div-title">{pathList.toJS()[1].name}</div>
                                            <div className="forum-div-num">{pathList.toJS()[1].product_count}门课程</div>
                                        </div>
                                        <img src={pathList.toJS()[1].icon} alt="" />
                                        <div className="forum-less"></div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-nav">
                                <li className="forum-li" key={pathList.toJS()[2].id}>
                                    <div className="forum-bg">
                                        <div className="forum-div">
                                            <div className="forum-div-title">{pathList.toJS()[2].name}</div>
                                            <div className="forum-div-num">{pathList.toJS()[2].product_count}门课程</div>
                                        </div>
                                        <img src={pathList.toJS()[2].icon} alt="" />
                                        <div className="forum-less"></div>
                                    </div>
                                </li>
                                <li className="forum-li" key={pathList.toJS()[3].id}>
                                    <div className="forum-bg">
                                        <div className="forum-div">
                                            <div className="forum-div-title">{pathList.toJS()[3].name}</div>
                                            <div className="forum-div-num">{pathList.toJS()[3].product_count}门课程</div>
                                        </div>
                                        <img src={pathList.toJS()[3].icon} alt="" />
                                        <div className="forum-less"></div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </React.Fragment>}
            </div>
        </div>
    )
}

ForumBar.propTypes = {
    pathList: PropTypes.object.isRequired
}