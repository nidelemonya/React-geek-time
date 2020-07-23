import React from 'react';
// import PropTypes from 'prop-types';
import './My.css';
import MyItems from '../../components/MyItem/MyItem';
import MySwiper from '../../components/MySwiper/MySwiper';

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
                        <h4>南风草木香
                            <span role="img" aria-label="weqe">🍀</span>
                        </h4>
                        <div className="my-body__infoms_mess_phone">
                            <p>157****5643</p>
                            <div>个人主页
                                <span className="iconfont">&#xe534;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-body__imgs">
                    <MySwiper></MySwiper>
                </div>
                <div className="my-body__items">
                    <MyItems />
                </div>
                {/* <div>
                    <MyItems/>
                </div> */}
            </div>
        </div>
    )
}  

// My.propTypes = {

// }
export default My