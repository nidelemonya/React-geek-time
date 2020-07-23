import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './ExploreTitle.css';

function ExploreTitle(props) {
    // console.log(props)
    const { title, name } = props;
    // console.log(title,name);
    return (
        <div className="explore_title">
            <span className="explore_title_title">{title}</span>
            <span className="explore_title_name">{name}</span>
        </div>
    )
}

ExploreTitle.propTypes = {
    title:PropTypes.string.isRequired,
    name:PropTypes.string
}

const ExploreTitles =  withRouter(ExploreTitle)
export default ExploreTitles