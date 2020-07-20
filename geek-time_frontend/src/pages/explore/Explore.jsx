import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Explore_search from '../../components/explore_search/Explore_search';
import Explore_Swiper from '../../components/swiper/Swiper';
import './Explore.css';

function Explore(props) {
    return (
        <div className="explore">
            <div className="explore-header">
                <div className="explore-title">发现</div>
                <span className="iconfont icon-rili"></span>
            </div>
            <div className="search">
                <Explore_search/>
            </div>
            <div className="swiper-box">
                <Explore_Swiper/>
            </div>
        </div>
    )
}

Explore.propTypes = {
    
}

const Explores =  withRouter(Explore)
export default Explores