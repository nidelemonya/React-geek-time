import React from 'react';
import Scroll from '../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import { ListContainer } from './style';
import ExploreSearch from '../../components/ExploreSearch/ExploreSearch';
import ExploreTitle from '../../components/ExploreTitle/ExploreTitle';
import ExploreSwiper from '../../components/ExploreSwiper/ExploreSwiper';
import './Explore.css';

function Explore(props) {
    return (
        <div className="explore">
            <div className="explore-header">
                <div className="explore-title">发现</div>
                <span className="iconfont">&#xe607;</span>
            </div>
            <ListContainer>
                <Scroll
                    onScroll={forceCheck}
                >
                    <div>
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
                                        <img src="https://static001.geekbang.org/resource/image/3c/20/3c29e7dcae2e3fa055dafe5a204d7520.jpg?x-oss-process=image/resize,m_fill,h_216,w_164" alt="peach-box"></img>
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
                                <ExploreTitle title="极客Live" name="直播预告" />
                            </div>
                            <div className="live-bottom">
                                <div className="live-bottom-left">
                                    <div className="live-bottom-left-top">
                                        <span className="iconfont icon-rili"></span>
                                        <span className="live-bottom-left-top-title">2020年07月20日 20:00</span>
                                    </div>
                                    <div className="live-bottom-left-center">
                                        <span>一小时带你了解 Vim 常用技巧</span>
                                    </div>
                                    <div className="live-bottom-left-bottom">
                                        <span>前 Intel 资深软件架构师吴咏炜，带你快速上手 Vim 模式</span>
                                    </div>
                                </div>
                                <div className="live-bottom-right">
                                    <div className="live-bottom-imgbox">
                                        <img src="https://static001.geekbang.org/resource/image/4d/e1/4dbfdffc675120d8153afda952eb32e1.jpg?x-oss-process=image/resize,m_fill,h_216,w_164" alt="吴咏炜"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="explore-winter">
                            <div className="explore-winter-box">
                                <img src="https://static001.geekbang.org/resource/image/cc/a7/ccb6575b43e2e7ae69a76b43b1d022a7.png" alt="explore-winter-box"></img>
                            </div>
                        </div>
                        <div className="explore-market">
                            <div className="market-top">
                                <ExploreTitle title="极客商城" name="进入商城" />
                            </div>
                            <div className="market-bottom">
                                <div className="market-box">
                                    <div className="market-img">
                                        <img src="https://img.yzcdn.cn/upload_files/2020/05/22/FkuMpMbB85EqgaLw6JCbGIu8_rD2.jpg" alt="market-img"></img>
                                    </div>
                                    <div className="market-title">
                                        <p className="market-bottom-t">充￥500得￥580</p>
                                        <p className="market-bottom-c">限时免费得好礼</p>
                                        <p className="market-bottom-b">￥ 500</p>
                                    </div>
                                </div>
                                <div className="market-box">
                                    <div className="market-img">
                                        <img src="https://img.yzcdn.cn/upload_files/2020/03/13/FrAkhuiMCAezSs3Q1yu7yLSbJ33u.jpg" alt="market-img1"></img>
                                    </div>
                                    <div className="market-title">
                                        <p className="market-bottom-t">图谱合集特惠</p>
                                        <p className="market-bottom-c">下单就返现</p>
                                        <p className="market-bottom-b">￥ 119</p>
                                    </div>
                                </div>
                                <div className="market-box">
                                    <div className="market-img">
                                        <img src="https://img.yzcdn.cn/upload_files/2019/11/29/FtELb3LbjVFl7JyC1Ut6QTE1IcFN.jpg" alt="market-img2"></img>
                                    </div>
                                    <div className="market-title">
                                        <p className="market-bottom-t">极客时间VIP年卡</p>
                                        <p className="market-bottom-c">365畅学专栏视频课</p>
                                        <p className="market-bottom-b">￥ 2999</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="explore-winter">
                            <div className="explore-winter-box">
                                <img src="https://static001.geekbang.org/resource/image/cc/a7/ccb6575b43e2e7ae69a76b43b1d022a7.png" alt="explore-winter-box"></img>
                            </div>
                        </div>
                    </div>
                </Scroll>
            </ListContainer>
        </div>
    )
}


export default Explore