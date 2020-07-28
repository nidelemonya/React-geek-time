import React, { useRef, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Title, Navbar, NavIcon} from './ForumLayout.style';
import { NavLink } from 'react-router-dom';


function Forum(props) {
    let length = 0;
    const ref = useRef(null);
    // console.log(ref);
    const { route } = props;
    let FroumDom;
    // console.log(ref.current)
    useEffect(() => {
        FroumDom = ref.current;
        // console.log(FroumDom)
    },[])
    // 缓存 Dom 节点？
    const changeNavIcon = (e) => {
        length = e.target.getAttribute('move');
        // console.log(length,'-----------------')
        if (FroumDom !== undefined)   {
            // console.log(length,'111111111111')
            FroumDom.style.transform = `translateX(${length}rem)`
        }
        // console.log(FroumDom)
    }
    return (
        <React.Fragment>
            <Top>
                <Title onClick={changeNavIcon}>
                    <NavLink  to="/forum/course" activeClassName="selected">
                        <span move={0} >课程</span>
                    </NavLink>
                    <NavLink  to="/forum/camp" activeClassName="selected">
                        <span move={1.6} >训练营</span>
                    </NavLink>
                    <NavLink  to="/forum/day" activeClassName="selected">
                        <span  move={3.8} >每日一课</span>
                    </NavLink>
                    <span className="forum-icon iconfont">&#xe688;</span>
                    <Navbar>
                        <NavIcon ref={ref}></NavIcon>
                    </Navbar>
                </Title>
            </Top>
            {renderRoutes(route.routes)}
        </React.Fragment>
    )
}

// 缓存组件
export default React.memo(Forum);