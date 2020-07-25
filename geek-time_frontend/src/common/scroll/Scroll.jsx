import React, { useEffect, useRef } from 'react';
// 常用的 好的包
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll';
import './scroll.css';
// 容器, 父组件


let bScrpll = null;
function Scroll(props) {
    const ref = useRef();
    const { click, onScroll, children} = props;
    useEffect(() => {
        const scrollView = ref.current; //找一下 dom 节点
        // console.log(scrollView);
        if (!bScrpll) { // 防止多次渲染 单例
            bScrpll = new BScroll(scrollView, {
                probeType: 3,
                click: click
            })
            if(onScroll) {
                bScrpll.on('scroll',(scroll) =>{
                    onScroll(scroll);
                })
            }
        }
    },[]);
    
    let refresh =  () => {
        if(bScrpll) {
            bScrpll.refresh();
        }
    }
    // console.log(children);
        return(
            <div className="scroll-view" ref={ref}>
            {children}
        </div>
        )
}

Scroll.defaultProps = {
    click: true,
    onScroll: null,
    refresh: false
}
Scroll.prototypes = {
    click: PropTypes.bool,
    onScroll:PropTypes.func,
    refresh: PropTypes.bool
}
export default Scroll;