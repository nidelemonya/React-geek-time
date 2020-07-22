import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ExploreSearch from '../../components/ExploreSearch/ExploreSearch';
import TabBar from '../../components/TabBar/TabBar';
import TitleBar from '../../components/TitleBar/TitleBar';
import ExploreSwiper from '../../components/ExploreSwiper/ExploreSwiper';
import './Explore.css';

function Explore(props) {
    return (
        <div className="explore">
            <div className="explore-header">
                <div className="explore-title">发现</div>
                <span className="iconfont icon-rili"></span>
            </div>
            <div className="search">
                <ExploreSearch />
            </div>
            <div className="swiper-box">
                <ExploreSwiper />
            </div>
            <div className="explore-peach">
                <div className="explore-bg">
                    <div className="peach-top">
                        <div className="peach-box">
                            <img src="https://static001.geekbang.org/resource/image/3c/20/3c29e7dcae2e3fa055dafe5a204d7520.jpg?x-oss-process=image/resize,m_fill,h_216,w_164"></img>
                        </div>
                        <span className="peach-left">卖桃者说</span>
                        <span className="peach-right iconfont icon-fanhui"></span>
                    </div>
                    <div className="peach-bottom">
                        <span className="iconfont icon-bofang"></span>
                        <span className="peach-title">第316期 | 快速学习秘法：费曼学习法</span>
                    </div>
                </div>
            </div>
            <div className="explore-live">
                <div className="live-top">
                    <TitleBar title="极客Live" name="直播预告"/>
                </div>
                <div className="live-top">
                    <TitleBar title="极客商城" name="进入商城"/>
                </div>
                <div className="live-top">
                    <TitleBar title="极客视点" name="查看全部"/>
                </div>
                <div className="live-top">
                    <TitleBar title="极客大学" name="查看全部"/>
                </div>
                <div className="live-top">
                    <TitleBar title="每日一课" name="查看全部"/>
                </div>
                <div className="live-top">
                    <TitleBar title="推荐阅读" name="全部课程"/>
                </div>
                <div className="live-top">
                    <TitleBar title="热点专题" name="查看全部"/>
                </div>
                <div className="live-top">
                    <TitleBar title="视频合集" name="查看全部"/>
                </div>
                <div className="live-bottom"></div>
            </div>
            <div className="explore-footer">
                <TabBar />
            </div>
        </div>
    )
}

Explore.propTypes = {

}

const Explores = withRouter(Explore)
export default Explores