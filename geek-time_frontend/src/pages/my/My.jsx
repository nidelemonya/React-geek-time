import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './My.css';
import MyItems from '../../components/MyItem/MyItem';
import MySwiper from '../../components/MySwiper/MySwiper';
import Scroll from '../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import { iconSet } from '../../api/config';
import BScroll from 'better-scroll';

function My(props) {
    const [refreshScroll, setrefreshScroll] = useState(false);
    useEffect(()=>{
        setrefreshScroll(true);
    },[])
    return (
        <div className="my">
            <div className="my-header">
                <div className="my-info">
                    <span className="iconfont">&#xe60b;</span>
                </div>
            </div>
            <div className="my-body">
            <Scroll
                refresh={refreshScroll}
                onScroll={(e) => {
                forceCheck();
                }}>
                    <div>
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
                <div className="my-body__bscroll">
                {/* <Scroll
                        refresh={refreshScroll}
                        onScroll={(e) => {
                          forceCheck();
                        }}> */}
                <div className="my-body__box">
                    <MyItems item_list= { iconSet[0].data[0].tab1  }/>
                    <MyItems item_list= { iconSet[0].data[0].tab2  }/>
                    <MyItems item_list= { iconSet[0].data[0].tab3  }/>
                    <MyItems item_list= { iconSet[0].data[0].tab4  }/>
                    <MyItems item_list= { iconSet[0].data[0].tab5  }/>
                </div>
                {/* </Scroll> */}
                </div>
            </div>
                </Scroll>
            </div>
        </div>
    )
}  

// My.propTypes = {

// }
export default My