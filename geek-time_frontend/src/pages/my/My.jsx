import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './My.css';

function My(props) {
    return (
        <div className="My">
            My
        </div>
    )
}

My.propTypes = {
    
}

const Mys =  withRouter(My)
export default Mys