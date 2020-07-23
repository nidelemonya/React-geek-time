import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './TitleBar.css';

function TitleBar(props) {
    // console.log(props)
    const { title, name } = props;
    // console.log(title,name);
    return (
        <div className="title-bar">
            <span className="title-bar_title">{title}</span>
            <span className="title-bar_name">{name}</span>
        </div>
    )
}

TitleBar.propTypes = {
    title:PropTypes.string.isRequired,
    name:PropTypes.string
}

const TitleBars =  withRouter(TitleBar)
export default TitleBars