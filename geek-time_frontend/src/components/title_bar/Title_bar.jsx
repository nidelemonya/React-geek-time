import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Title_bar.css';

function Title_bar(props) {
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

Title_bar.propTypes = {
    title:PropTypes.string.isRequired,
    name:PropTypes.string
}

const Title_bars =  withRouter(Title_bar)
export default Title_bars