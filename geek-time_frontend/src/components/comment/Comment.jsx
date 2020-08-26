import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css'

export default function Comment(props) {
    const { commentList } = props
    // console.log(commentList);

    const time = (time = +new Date()) => {
        var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
        return date.toJSON().substr(0, 19).replace('T', ' ');
    }
    return (
            <div className="AEQMMag__0" columndata="[object Object]">
                {
                    commentList.toJS().map(key => {
                        return (
                            <div key={key.id} className="_2qEA6KRz_0">
                                <img src={key.user_header} alt=""  className="_2kUU_o1K_0" />
                                <div className="_2Vntm3ZR_0">
                                    <div className="_2DK-_zXj_0">
                                        <div>
                                            <div className="ccS-euc9_0">{key.aid}</div>
                                            <div className="_3Gfsvskq_0">{time(key.comment_ctime*1000)}</div>
                                        </div>
                                        <div className="O8LxZNoL_0">
                                            <i className="iconfont">&#xe604;</i>
                                        </div></div>
                                    <div>
                                        <div className="_14_4h0Yt_0">
                                            {key.comment_content}
                                            </div>
                                        <div className="_1tqXAGEh_0">
                                            <span>展开</span>
                                            <i className="iconfont">&#xe6f3;</i>
                                        </div>
                                    </div></div>
                            </div>
                        )
                    })
                }

            </div>
    )
}

Comment.propTypes = {
    commentList:PropTypes.object.isRequired,
}