import React from 'react';
import { ListContainer } from './style';
import Scroll from '../../../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';
import "./Detail.css";

export default function Detail(props){
    return (
        <div className="detail">
            <div className="detail-header">
                <div className="detail-header-left">
                    <span className="iconfont">&#xe571;</span>
                </div>
                <div className="detail-header-right">
                    <span className="iconfont">&#xe58b;</span>
                    <span className="iconfont">&#xe60c;</span>
                </div>
            </div>
            <ListContainer>
                <Scroll
                    onScroll={forceCheck}>
                    <div className="detail-center">
                        detail
                    </div>
                </Scroll>
            </ListContainer>
            <div className="detail-bottom">
                <div className="detail-bottom-left">
                    <div className="detail-bottom-t">
                        <span>￥19.9</span>
                    </div>
                    <div className="detail-bottom-b">
                        <div className="detail-bottom-bk">
                            <span>新人价</span>
                        </div>
                        <div className="detail-bottom-sk">
                            <span>￥99</span>
                        </div>
                    </div>
                </div>
                <div className="detail-bottom-right">
                    <span>立即订阅</span>
                </div>
            </div>
        </div>
    )
}