import React, { useEffect, memo } from 'react';
import { Container, ListContainer } from './style';
import Scroll from '../../../../common/scroll/Scroll';
import { forceCheck } from 'react-lazyload';

import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux';
import "./Intro.css";

function Intro(props){
    const { intro } = props;
    const { getIntroDataDispatch } = props
    console.log(intro)
    useEffect(() => {
        if (!intro.length) {
            getIntroDataDispatch()
        }
    }, [getIntroDataDispatch, intro.length])
    return (
        <Container>
            <div className="intro">
            <div className="intro-header">
                <div className="intro-header-left">
                    <span className="iconfont">&#xe571;</span>
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
                        intro
                    </div>
                </Scroll>
            </ListContainer>
            <div className="intro-bottom">
                <div className="intro-bottom-left">
                    <div className="intro-bottom-t">
                        <span>￥19.9</span>
                    </div>
                    <div className="intro-bottom-b">
                        <div className="intro-bottom-bk">
                            <span>新人价</span>
                        </div>
                        <div className="intro-bottom-sk">
                            <span>￥99</span>
                        </div>
                    </div>
                </div>
                <div className="intro-bottom-right">
                    <span>立即订阅</span>
                </div>
            </div>
        </div>
        </Container>
    )
}


const mapStateToProps = (state) => ({
    intro: state.intro.intro,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getIntroDataDispatch() {
            dispatch(actionTypes.getIntro())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Intro))