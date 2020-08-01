import React, { useState, useEffect, useRef, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, ListContainer } from './style';
import Scroll from '../../../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import Brief from '../../../../components/brief/Brief';
import Catalog from '../../../../components/catalog/Catalog';
import Recommend from '../../../../components/recommend/Recommend';
import Comment from '../../../../components/comment/Comment';
import Loading from '../../../../common/loading/Loading';

import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux';
import "./Intro.css";

function Intro(props) {

    const [Briefshow, setBriefshow] = useState(true);
    const [Catalogfshow, setCatalogshow] = useState(false);
    const [Recommendshow, setRecommendshow] = useState(false);
    const [Commentshow, setCommentshow] = useState(false);

    //  注意 map() 不会对空数组进行检测。
    const { id, intro, brief, articleList, chapterList, recommendList, commentList, introLoading } = props;
    // console.log(props);
    const { getIntroDataDispatch, getCatalogDataDispatch, getRecommendDataDispatch, getCommentDataDispatch } = props
    // console.log(intro, brief);
    // console.log(introLoading)
    const ref = useRef(null);
    // console.log(ref);
    let length = 0,
        IntroDom;
    useEffect(() => {
        // 拿到当前 id 子路由
        const id = props.match.params.id;
        getIntroDataDispatch(id)
        // console.log(id)
    },[getIntroDataDispatch, props.match.params.id])

    IntroDom = ref.current;
    // console.log(IntroDom)

    const difference = () => {
        if (Briefshow) setBriefshow(false)
        if (Catalogfshow) setCatalogshow(false)
        if (Recommendshow) setRecommendshow(false)
        if (Commentshow) setCommentshow(false)
    }

    const changeLength = (e) => {
        length = e.target.getAttribute('move');
        // console.log(length, IntroDom);
        if (IntroDom !== null)   {
            IntroDom.style.transform = `translateX(${length}rem)`
        }
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
                            {brief.toJS().map((m, i) => {
                                return (
                                    <div key={i} className="_32BSm8u__0">
                                        <div className="_1TF-7Ks9_0">
                                            <div className="_1tQ414Qd_0">
                                                <img className="_3rqcVP2R_0" src={m.author.avatar} alt={m.title}/>
                                                <div className="HXOfNAKh_0">
                                                    <span className="_2BooQxT-_0">{m.update_frequency}</span>
                                                </div>
                                            </div>
                                            <div className="_3RNfor9y_0"><div>
                                                <div className="_3-qN2sZJ_0">{m.title}</div>
                                                <div className="_5si8bLe__0">{m.subtitle}</div>
                                            </div>
                                                <div className="_3JGTy9bX_0">
                                                    <div className="_2zzFmXWs_0">讲师: {m.author.name}</div>
                                                    <div className="_3Kig1Yjz_0">
                                                        <span className="_1HcMwHaC_0">+</span>
                                                        收藏
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_136oNbm5_0">
                                            <div className="_2BooQxT-_0">共{m.unit}<span>
                                            ·约{(m.total_length/3600).toFixed(0)}小时{(Number(m.total_length/3600).toFixed(2).substr(3,4)*0.6).toFixed(0)}分钟</span></div>
                                            <div className="_2BooQxT-_0">{m.extra.sub.count}人已学习</div>
                                        </div> <div className="xae1v6CD_0">
                                            <div className="_3-qN2sZJ_0">
                                                <span className="iconfont _3MKZ0IpG_0">&#xe6ab;
                                        </span>学习服务</div>
                                            <div className="IwQi4XxR_0">
                                                {m.extra.helper.map((t, i) => {
                                                    if (i <= 2) {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                <span>{t.title}、</span>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return <React.Fragment key={i}></React.Fragment>
                                                })}
                                                <span className="_1tRMNbMt_0"></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div data-columnintrotabs="columnIntroTabs" className="_3F8GtztG_0">
                                <div className="_3TPdE1uq_0 _2LAchprJ_0 L8uZfH9D_0">
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=intro`} className="selected" onClick={handleIntro}>
                                            <span move={0}  onClick={changeLength}>简介</span></NavLink>
                                    </div>
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=catalog`} className="selected" onClick={handleCatalog}>
                                            <span move={2.18} onClick={changeLength}>目录</span>
                                        <span className="_3mvvnPU9_0">
                                                <span className="_2i6pHVrd_0"  onClick={changeLength}>试看</span>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=recommend`} className="selected" onClick={handleRecommend}>
                                        <span move={4.38}  onClick={changeLength}>推荐</span>
                                        </NavLink></div>
                                    <div className="_1S4s1vAE_0">
                                        <NavLink to={`/forum/course/${id}?tab=comment`} className="selected" onClick={handleComment} >
                                            <span move={6.88}  onClick={changeLength}>精选留言</span>
                                        </NavLink></div>
                                    <div className="_1M18M5Tf_0 _1z35LrE-_0" ref={ref} style={{left: 0.92 +'rem'}}>
                                    </div>
                                </div>
                            </div>
                            <Brief style={BriefStyle} intro={intro} />
                            <Catalog style={CatalogStyle} chapterList={chapterList} articleList={articleList} />
                            <Recommend style={RecommendStyle} recommendList={recommendList} />
                            <Comment style={CommentStyle} commentList={commentList} />
                        </div>
                    </Scroll>
                </ListContainer>
                <div className="intro-bottom">
                    {
                        brief.toJS().map((m, i) => {
                            return (
                                <div key={i} className="intro-bottom-left">
                                    <div className="intro-bottom-t">
                                        <span>￥{m.extra.first_promo.price/100}</span>
                                    </div>
                                    <div className="intro-bottom-b">
                                        <div className="intro-bottom-bk">
                                            <span>新人价</span>
                                        </div>
                                        <div className="intro-bottom-sk">
                                            <span>{m.price.sale/100}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="intro-bottom-right">
                        <NavLink to={"/payment/"} activeClassName="selected">
                            <span>立即订阅</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Loading Loading={introLoading} title="正在拼命加载中..." />
        </Container>
    )
}


const mapStateToProps = (state) => ({
    id: state.getIn(['intro','id']),
    intro: state.getIn(['intro','intro']),
    brief: state.getIn(['intro','brief']),
    articleList: state.getIn(['intro','articleList']),
    chapterList: state.getIn(['intro','chapterList']),
    recommendList: state.getIn(['intro','recommendList']),
    commentList: state.getIn(['intro','commentList']),
    introLoading: state.getIn(['intro','introLoading']),
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