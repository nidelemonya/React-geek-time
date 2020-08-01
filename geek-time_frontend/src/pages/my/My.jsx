import React, { memo } from 'react';
import './My.css';
import MyItems from '../../components/MyItem/MyItem';
import MySwiper from '../../components/MySwiper/MySwiper';
import Scroll from '../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import { ListContainer } from './style';
import { iconSet } from '../../api/config';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux'

function My(props) {
    const { route, balance } = props;
    // console.log(balance)
    return (
        <div className="my">
            <div className="my-header">
                <div className="my-info">
                    <span className="iconfont">&#xe60b;</span>
                </div>
            </div>
                <ListContainer>
                    <Scroll onScroll={forceCheck}>
                        <div className="my-body">
                            <div className="my-body__infoms">
                                <div className="my-body__infoms_avatar">
                                    <img src="https://static001.geekbang.org/account/avatar/00/1e/c8/cd/723dd9f9.jpg?x-oss-process=image/resize,m_fill,h_142,w_142" alt="" />
                                </div>
                                <div className="my-body__infoms_mess">
                                    <h4>南风草木香
                            <span role="img" aria-label="weqe">🍀</span>
                                    </h4>
                                    <div className="my-body__infoms_mess_phone">
                                        <p>157****5643</p>
                                        <div className="my-body__infoms_mess_phone_my">
                                            个人主页
                                <span className="iconfont">&#xe534;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-body__imgs">
                                <MySwiper></MySwiper>
                            </div>
                            <div className="my-body__box">
                                <MyItems balance={balance.toFixed(2)} item_list={iconSet.tab1} />
                                <MyItems item_list={iconSet.tab2} />
                                <MyItems item_list={iconSet.tab3} />
                                <MyItems item_list={iconSet.tab4} />
                                <MyItems item_list={iconSet.tab5} />
                            </div>
                        </div>
                    </Scroll>
                </ListContainer>
                {/* 渲染子路由 */}
                {renderRoutes(route.routes)}
        </div>
    )
}
const mapStateToProps = (state) => ({
    balance: state.user.balance
})
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
// export default My
export default connect(mapStateToProps,mapDispatchToProps)(memo(My));