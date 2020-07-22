import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './MyItem.css';

function MyItem(props) {
    return (
        <div className="my-body__items">
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
        </div>
    )
}

MyItem.propTypes = {

}

const MyItems = withRouter(MyItem)
export default MyItems