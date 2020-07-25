import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import TitleBar from '../../../components/TitleBar/TitleBar';
import ForumBar from '../../../components/ForumBar/ForumBar';
import ForumTag from '../../../components/ForumTag/ForumTag';
import ForumList from '../../../components/ForumList/ForumList';
import Loading from '../../../common/loading/Loading';
import Scroll from '../../../common/scroll/Scroll';
import { ListContainer } from './style';
import { forceCheck } from 'react-lazyload';
import './Forum.css';

function Forum(props) {
    // 从 props 结构数据出来
    const { lessons, infos, enterLoading } = props;
    const { getForumListDataDispatch, getInfosDataDispatch } = props;
    const [refreshScroll, setrefreshScroll] = useState(false);
    useEffect(() => {
        // 如果没有数据 请求一次
        if (!lessons.length) {
            getForumListDataDispatch();
        }
        if (!infos.length) {
            getInfosDataDispatch();
            setrefreshScroll(true)
        }
    }, [])
    // 加个空数组防止一直刷新
    // console.log(lessons, infos, enterLoading);
    console.log(refreshScroll);
    // console.log((lessons), '------')
    return (
        <div className="forum">
                <ListContainer>
                <Scroll
                    onScroll = {forceCheck} 
                    // pullUp={ handlePullUp }
                    // pullDown = { handlePullDown }
                    >
                    <div>
                        <div className="forum-study">
                            <div className="forum-title1">
                                <TitleBar title="学习路径" name="查看全部" />
                            </div>
                            <div className="forum-box1">
                                <ForumBar lessons_path={lessons.data !== undefined ? lessons.data[0] : {}} />
                            </div>
                        </div>
                        <div className="forum-lesson">
                            <div className="forum-lesson-title">
                                <TitleBar title="课程方向" name="查看全部" />
                            </div>
                            <div className="forum-box2">
                                <ForumTag lessons_tag={lessons.data !== undefined ? lessons.data[1] : {}} />
                            </div>
                        </div>
                        <div className="forum-all">
                            <div className="forum-all-title">
                                <TitleBar title="全部课程" name="" />
                            </div>
                            <div className="forum-all-box3">
                                <div className="forum-all-tab">
                                    <div className="froum_s forum_v">
                                        <div className="kt">
                                            <span className="sv">课程形式</span>
                                            <span className="iconfont uwa">&#xe6f3;</span>
                                        </div>
                                    </div>
                                    <div className="froum_s forum_v">
                                        <div className="kt">
                                            <span className="sv">订阅状态</span>
                                            <span className="iconfont uwa">&#xe6f3;</span>
                                        </div>
                                    </div>
                                    <div className="froum_s forum_v">
                                        <div className="kt FWsN21kW_0">
                                            <span className="sv">订阅数</span>
                                            <span className="iconfont uwa">&#xe601;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="forum-xw">
                                <ForumList refreshScroll={refreshScroll} infos={infos.length !== 0 ? infos.data : {}} />
                            </div>
                        </div>
                    </div>
            </Scroll>
            </ListContainer>
            <Loading Loading={enterLoading} title="正在加载中..." />
        </div>)
}

const mapStateToProps = (state) => ({
    lessons: state.forum.lessons,
    infos: state.forum.infos,
    enterLoading: state.forum.enterLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
        getForumListDataDispatch() {
            dispatch(actionTypes.getLessons())
        },
        getInfosDataDispatch() {
            dispatch(actionTypes.getInfos())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Forum))