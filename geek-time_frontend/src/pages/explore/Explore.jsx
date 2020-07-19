import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Explore.css';

function Explore(props) {
    return (
        <div className="explore">
            Explore
        </div>
    )
}

Explore.propTypes = {
    
}

const Explores =  withRouter(Explore)
export default Explores