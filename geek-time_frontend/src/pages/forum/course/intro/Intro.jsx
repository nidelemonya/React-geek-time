import React, { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, ListContainer } from './style';
import Scroll from '../../../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import Brief from '../../../../components/brief/Brief';
import Catalog from '../../../../components/catalog/Catalog';
import Recommend from '../../../../components/recommend/Recommend';
import Comment from '../../../../components/comment/Comment';

import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux';
import "./Intro.css";

function Intro(props) {

    const [Briefshow, setBriefshow] = useState(true);
    const [Catalogfshow, setCatalogshow] = useState(false);
    const [Recommendshow, setRecommendshow] = useState(false);
    const [Commentshow, setCommentshow] = useState(false);

    const { id, intro } = props;
    const { getIntroDataDispatch, getCatalogDataDispatch, getRecommendDataDispatch, getCommentDataDispatch } = props
    // console.log(intro)
    useEffect(() => {
        // 拿到当前 id 子路由
        const id = props.match.params.id;
        getIntroDataDispatch(id)
        // console.log(id)
    }, [getIntroDataDispatch])

    const difference = () => {
        if (Briefshow) setBriefshow(false)
        if (Catalogfshow) setCatalogshow(false)
        if (Recommendshow) setRecommendshow(false)
        if (Commentshow) setCommentshow(false)
    }
    const handleIntro = () => {
        difference()
        setBriefshow(true)
    }

    const handleCatalog = () => {
        getCatalogDataDispatch()
        difference()
        setCatalogshow(true)
    }

    const handleRecommend = () => {
        getRecommendDataDispatch()
        difference()
        setRecommendshow(true)
    }

    const handleComment = () => {
        getCommentDataDispatch()
        difference()
        setCommentshow(true)
    }

    const BriefStyle = Briefshow ? { display: "" } : { display: "none" };
    const CatalogStyle = Catalogfshow ? { display: "" } : { display: "none" };
    const RecommendStyle = Recommendshow ? { display: "" } : { display: "none" };
    const CommentStyle = Commentshow ? { display: "" } : { display: "none" };
    return (
        <Container>
            <div className="intro">
                <div className="intro-header">
                    <div className="intro-header-left">
                        <NavLink to={"/forum/course/"} activeClassName="selected">
                            <span className="iconfont">&#xe571;</span>
                        </NavLink>
                    </div>
                    <div className="intro-header-right">
                        <span className="iconfont">&#xe58b;</span>
                        <span className="iconfont">&#xe60c;</span>
                    </div>
                </div>
                <ListContainer>
                    <Scroll
                        onScroll={forceCheck}>
                        <div className="intro-center">
                            <div className="_32BSm8u__0">
                                <div className="_1TF-7Ks9_0">
                                    <div className="_1tQ414Qd_0">
                                        <img className="_3rqcVP2R_0" src="https://static001.geekbang.org/resource/image/d3/3a/d3a96afa07fbbc5219ffe5e2ccaade3a.jpg?x-oss-process=image/resize,m_fill,h_216,w_164" />
                                        <div className="HXOfNAKh_0">
                                            <span className="_2BooQxT-_0">全集</span>
                                        </div>
                                    </div>
                                    <div className="_3RNfor9y_0"><div><div className="_3-qN2sZJ_0">
                                        数据结构与算法之美</div> <div className="_5si8bLe__0">为工程师量身打造的数据结构与算法私教课</div></div>
                                        <div className="_3JGTy9bX_0"><div className="_2zzFmXWs_0">讲师：王争</div>
                                            <div className="_3Kig1Yjz_0"><span className="_1HcMwHaC_0">+</span>收藏
                                </div></div></div></div>
                                <div className="_136oNbm5_0"><div className="_2BooQxT-_0">共80讲<span>·约15小时25分钟</span></div>
                                    <div className="_2BooQxT-_0">87718人已学习</div></div> <div className="xae1v6CD_0">
                                    <div className="_3-qN2sZJ_0"><span className="iconfont _3MKZ0IpG_0"></span>学习服务</div>
                                    <div className="IwQi4XxR_0">无限回看、结课证书、奖励礼券<span className="_1tRMNbMt_0"></span>
                                    </div></div></div>
                            <div data-columnintrotabs="columnIntroTabs" className="_3F8GtztG_0">
                                <div className="_3TPdE1uq_0 _2LAchprJ_0 L8uZfH9D_0">
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=intro`} className="selected" onClick={handleIntro}>简介</NavLink>
                                    </div>
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=catalog`} className="selected" onClick={handleCatalog}>目录
                                        <span className="_3mvvnPU9_0">
                                                <span className="_2i6pHVrd_0">试看</span>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="_1S4s1vAE_0"><NavLink to={`/forum/course/${id}?tab=recommend`} className="selected" onClick={handleRecommend}>推荐</NavLink></div>
                                    <div className="_1S4s1vAE_0"><NavLink to={`/forum/course/${id}?tab=comment`} className="selected" onClick={handleComment} >精选留言</NavLink></div>
                                    <div className="_1M18M5Tf_0 _1z35LrE-_0" style={{ width: 34 + 'px' }, { left: 36 + 'px' }}>
                                    </div>
                                </div>
                            </div>
                            <Brief style={BriefStyle} />
                            <Catalog style={CatalogStyle}/>
                            <Recommend style={RecommendStyle}/>
                            <Comment style={CommentStyle}/>
                        </div>
                    </Scroll>
                </ListContainer>
                <div className="intro-bottom">
                    <div className="intro-bottom-left">
                        <div className="intro-bottom-t">
                            <span>￥19.9</span>
                        </div>
                        <div className="intro-bottom-b">
                            <div className="intro-bottom-bk">
                                <span>新人价</span>
                            </div>
                            <div className="intro-bottom-sk">
                                <span>￥99</span>
                            </div>
                        </div>
                    </div>
                    <div className="intro-bottom-right">
                        <NavLink to={"/payment/"} activeClassName="selected">
                            <span>立即订阅</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}


const mapStateToProps = (state) => ({
    intro: state.intro.intro,
    id: state.intro.id
})

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        getIntroDataDispatch(id) {
            dispatch(actionTypes.getIntro(id))
            dispatch(actionTypes.getBrief())
        },

        getCatalogDataDispatch() {
            dispatch(actionTypes.getChapterList())
            dispatch(actionTypes.getArticleList())
        },

        getRecommendDataDispatch() {
            dispatch(actionTypes.getRecommendList())
        },

        getCommentDataDispatch() {
            dispatch(actionTypes.getCommentList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Intro))