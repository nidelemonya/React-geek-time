import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Title} from './ForumLayout.style';
import { NavLink } from 'react-router-dom';


function Forum(props) {
    const { route } = props;
    return (
        <React.Fragment>
            <Top>
                <Title>
                    <NavLink to="/forum/course" activeClassName="selected">
                        <span className="forum-name">课程</span>
                    </NavLink>
                    <NavLink to="/forum/camp" activeClassName="selected">
                        <span className="forum-name">训练营</span>
                    </NavLink>
                    <NavLink to="/forum/day" activeClassName="selected">
                        <span className="forum-name">每日一课</span>
                    </NavLink>
                    <span className="forum-icon iconfont">&#xe688;</span>
                </Title>
            </Top>
            {renderRoutes(route.routes)}
        </React.Fragment>
    )
}

// 缓存组件
export default React.memo(Forum);