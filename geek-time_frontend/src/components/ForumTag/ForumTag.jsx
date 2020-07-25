import React from 'react';
import PropTypes from 'prop-types';
import './ForumTag.css';

export default function ForumTag(props) {
    const {lessons_tag} = props;
    // console.log(lessons_tag);
    return (
        lessons_tag.list === undefined ? <div></div>
        : lessons_tag.list.map(m =>{
            return (
                <div key={m.id} className="K0VUHZTt_0">{m.title}</div>
            )
        })
    )
}

ForumTag.propTypes = {
    lessons_tag: PropTypes.object.isRequired
}