import React, { useEffect, memo} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import TitleBar from '../../components/TitleBar/TitleBar';
import ForumBar from '../../components/ForumBar/ForumBar';
import ForumTag from '../../components/ForumTag/ForumTag';
import ForumList from '../../components/ForumList/ForumList';
import './Forum.css';

function Forum(props) {
    // 从 props 结构数据出来
    const { lessons, training, enterLoading } = props;
    const { getForumListDataDispatch, getTrainDataDispatch} = props;
    useEffect(()=> {
        // 如果没有数据 请求一次
        if (!lessons.length) {
            getForumListDataDispatch();
        }
        if(!training.length) {
            getTrainDataDispatch();
        }
    },[])
    // 加个空数组防止一直刷新
    // console.log(lessons, training, enterLoading);
    // console.log((lessons.data),'------')
    if(lessons.data !== undefined) {
        const study_lessons = lessons.data[0]
    }
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
                        <TitleBar title="学习路径" name="查看全部" />
                    </div>
                    <div className="forum-box1">
                        <ForumBar study_lessons={lessons.data !== undefined ? lessons.data[0] : []}/>
                    </div>
                </div>
                <div className="forum-lesson">
                    <div className="forum-lesson-title">
                        <TitleBar title="课程方向" name="查看全部" />
                    </div>
                    <div className="forum-box2">
                        <ForumTag />
                    </div>
                </div>
                <div className="forum-all">
                    <div className="forum-all-title">
                        <TitleBar title="全部课程" name="" />
                    </div>
                    <div className="forum-all-box3">
                        <div className="forum-all-tab">
                            <div className="froum_s forum_v">
                                <div className="kt"><span className="sv">课程形式</span> <span
                                    className="iconfont icon-fanhui1"></span></div>
                            </div>
                            <div className="froum_s forum_v">
                                <div className="kt"><span className="sv">订阅状态</span> <span
                                    className="iconfont icon-fanhui1"></span></div>
                            </div>
                            <div className="froum_s forum_v">
                                <div className="kt FWsN21kW_0"><span className="sv">订阅数</span> <span
                                    className="iconfont icon-xiazai"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="forum-xw">
                        <ForumList />
                    </div>
                </div>
            </div>
        </div>)
}

const mapStateToProps = (state) => ({
    lessons: state.forum.lessons,
    training:state.forum.training,
    enterLoading:state.forum.enterLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
        getForumListDataDispatch() {
            dispatch(actionTypes.getLessons())
        },
        getTrainDataDispatch() {
            dispatch(actionTypes.getTraining())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Forum))