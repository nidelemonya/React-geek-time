import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './ExploreSearch.css';

export default function ExploreSearch(props) {
    return (
        <div className="explore_search">
                <div className="bn iconfont icon-sousuo"></div>
                <span className="inp">
                    <input text="text" placeholder="Linux 性能优化实战"></input>
                </span>
        </div>
    )
}

ExploreSearch.propTypes = {
}