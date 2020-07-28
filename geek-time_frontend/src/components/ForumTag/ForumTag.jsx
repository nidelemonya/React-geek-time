import React from 'react';
import PropTypes from 'prop-types';
import './ForumTag.css';

export default function ForumTag(props) {
    const { directionList } = props;
    // console.log(directionList);
    return (
        directionList.map(m => {
            return (
                <div key={m.id} className="K0VUHZTt_0">{m.title}</div>
            )
        })
    )
}

ForumTag.propTypes = {
    directionList: PropTypes.array.isRequired
}