import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Explore_search.css';

export default function Explore_search(props) {
    return (
        <div className="explore_search">
                <div className="bn iconfont icon-sousuo"></div>
                <span className="inp">
                    <input text="text" placeholder="Linux 性能优化实战"></input>
                </span>
        </div>
    )
}

Explore_search.propTypes = {
}