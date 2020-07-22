import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './My.css';
import MyItems from '../../components/MyItem/MyItem';
import TabBar from '../../components/TabBar/TabBar';

function My(props) {
    return (
        <div className="my">
            <div className="my-header">
                <div className="my-info">
                    <span className="iconfont">&#xe60b;</span>
                    {/* <span className="my-info__badge">
                      11
                   </span> */}
                </div>
            </div>
            <div className="my-body">
                <div className="my-body__infoms">
                    <div className="my-body__infoms_avatar">
                        <img src="https://static001.geekbang.org/account/avatar/00/1e/c8/cd/723dd9f9.jpg?x-oss-process=image/resize,m_fill,h_142,w_142" alt="" />
                    </div>
                    <div className="my-body__infoms_mess">
                        <h4>南风草木香🍀</h4>
                        {/* <h3>南风</h3> */}
                        <div className="my-body__infoms_mess_phone">
                            <p>157****5643</p>
                            <a href="#">个人主页
                                <span className="iconfont">&#xe534;</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="my-body__imgs">
                    <img src={require('../../assets/myimg1.png')} alt="" />
                    <img src="../assets/myimg2.png" alt="" />
                </div>
                <div className="my-body__tabbars">
                    <MyItems />
                    {/* <div className="my-body__tabbars_tabbars1">
                        <div className="my-body__tabbars_tabbar_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe605;</span>
                                <div className="name">账户</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_tabbar_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe61d;</span>
                                <div className="name">我的课程</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_tabbar_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe677;</span>
                                <div className="name">我的订单</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="my-body__tabbars_tabbars2">
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe620;</span>
                                <div className="name">商城订单</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe62b;</span>
                                <div className="name">我的拼团</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe654;</span>
                                <div className="name">我的证书</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-body__tabbars_tabbars3">
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe664;</span>
                                <div className="name">我的每日一课</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-body__tabbars_tabbars4">
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe61f;</span>
                                <div className="name">礼券</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe6ad;</span>
                                <div className="name">课程赠送</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe69f;</span>
                                <div className="name">分享有赏</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe608;</span>
                                <div className="name">邀请好友</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe60d;</span>
                                <div className="name">关注服务号领币</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-body__tabbars_tabbars5">
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe607;</span>
                                <div className="name">帮助与反馈</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                        <div className="my-body__tabbars_item">
                            <div className="my-body__tabbars_tabbar_itemLeft">
                                <span className="icon1 iconfont">&#xe616;</span>
                                <div className="name">设置</div>
                            </div>
                            <div className="my-body__tabbars_tabbar_itemRight">
                                <span className="icon2 iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="my-footer">
                {/* <TabBar/> */}
            </div>
        </div>
    )
}

My.propTypes = {

}

const Mys = withRouter(My)
export default Mys