import React from 'react';
import PropTypes from 'prop-types';
import './ForumBar.css';

export default function ForumBar(props) {
    const { lessons_path } = props;
    // console.log(lessons_path)
    return (
        // 如果为 undefined 返回空div
        lessons_path.list === undefined ? <div></div>
            : <ul className="forum-ul">
                {
                    lessons_path.list.map(m => {
                        return (
                            <li className="forum-li" key={m.id}>
                                <div className="forum-bg">
                                    <div className="forum-div">
                                        <div className="forum-div-title">{m.name}</div>
                                        <div className="forum-div-num">{m.product_count}门课程</div>
                                    </div>
                                    <img src={m.icon} alt="" />
                                    <div className="forum-less"></div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
    )
}

ForumBar.propTypes = {
    lessons_path:PropTypes.object.isRequired
}