import React, { useEffect, memo } from 'react';
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
import { renderRoutes } from 'react-router-config';

function Forum(props) {
    // console.log(props);
    // 从 props 解构数据出来
    const { route, pathList, directionList, infoList, enterLoading, pullUpLoading, pullDownLoading } = props;
    const { getForumListDataDispatch, getInfoListDataDispatch, pullUpRefresh, pullDownRefresh } = props;
    // console.log(pathList, directionList, infoList)
    const handlePullUp = () => {
        pullUpRefresh();
    };

    const handlePullDown = () => {
        pullDownRefresh();
    };

    useEffect(() => {
        // 如果没有数据 请求一次
        if (!pathList.size && !directionList.size) {
            getForumListDataDispatch();
        }
        if (!infoList.size) {
            getInfoListDataDispatch();
        }
        // eslint-disable-next-line
    }, [])
    // 加个空数组表示只在组件挂载和卸载时执行一次
    // console.log(pullUpLoading, pullDownLoading, '------')
    return (
        <div className="forum">
            <ListContainer>
                <Scroll
                    onScroll={forceCheck}
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}
                // pulldown，监听下拉动作，可以实现下拉刷新；
                // pullup，监听上拉动作，可以实现上拉加载；
                >
                    <div>
                        <div className="forum-study">
                            <div className="forum-title1">
                                <TitleBar title="学习路径" name="查看全部" />
                            </div>
                            <div className="forum-box1">
                                <ForumBar pathList={pathList} />
                            </div>
                        </div>
                        <div className="forum-lesson">

                            <div className="forum-lesson-title">
                                <TitleBar title="课程方向" name="查看全部" />
                            </div>

                            <div className="forum-box2">
                                <ForumTag  directionList={directionList}/>
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
                                <ForumList infoList={infoList} />
                            </div>
                        </div>
                    </div>
                </Scroll>
            </ListContainer>
            <Loading Loading={enterLoading} title="正在加载中..." />
            {/* 重新 render routes 一次 */}
            {renderRoutes(route.routes)}
        </div>)
}

// const mapStateToProps = (state) => {
//     console.log(state.getIn(['forum','pathList']))
//     return {
//         pathList: state.forum.pathList,
//         directionList: state.forum.directionList,
//         infoList: state.forum.infoList,
//         enterLoading: state.forum.enterLoading,
//         pageCount: state.forum.pageCount,
//         pullUpLoading: state.forum.pullUpLoading,
//         pullDownLoading: state.forum.pullDownLoading
//     }
// }

// 这个函数会接受 store.getState() 的结果作为参数 => state，然后返回一个对象，这个对象是根据 state 生成的。
// mapStateTopProps 相当于告知了 Connect 应该如何去 store 里面取数据，然后可以把这个函数的返回结果传给被包装的组件
const mapStateToProps = (state) => ({
    pathList: state.getIn(['forum','pathList']),
    directionList: state.getIn(['forum','directionList']),
    infoList: state.getIn(['forum','infoList']),
    enterLoading: state.getIn(['forum','enterLoading']),
    pageCount: state.getIn(['forum','pageCount']),
    pullUpLoading: state.getIn(['forum','pullUpLoading']),
    pullDownLoading: state.getIn(['forum','pullDownLoading']),
})
// 和 mapStateToProps 一样，它返回一个对象，这个对象内容会同样被 connect 当作是 props 参数传给被包装的组件。
// 不一样的是，这个函数不是接受 state 作为参数，而是 dispatch，
// 你可以在返回的对象内部定义一些函数，这些函数会用到 dispatch 来触发特定的 action。
const mapDispatchToProps = (dispatch) => {
    return {
        getForumListDataDispatch() {
            dispatch(actionTypes.getForumList())
        },
        getInfoListDataDispatch() {
            dispatch(actionTypes.getInfoList())
        },

        // 滑到最底部刷新部分的处理
        pullUpRefresh() {
            dispatch(actionTypes.changePullUpLoading(true));
            dispatch(actionTypes.refreshMoreInfoList());
        },
        
        //顶部下拉刷新
        pullDownRefresh() {
            dispatch(actionTypes.changePullDownLoading(true));
            dispatch(actionTypes.changeListOffset(0));
            dispatch(actionTypes.getInfoList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Forum))