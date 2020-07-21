import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './My.css';

function My(props) {
    return (
        <div className="my">
           <div className="my-header">
               <div className="my-info">
                   <span className="iconfont">&#xe60b;</span>
                   <span className="my-info__badge">
                      11
                   </span>
               </div>
           </div>
           <div className="my-body">
               <div className="my-body__infoms">
                   <div className="my-body__infoms_avatar">
                      <img src="https://static001.geekbang.org/account/avatar/00/1e/c8/cd/723dd9f9.jpg?x-oss-process=image/resize,m_fill,h_142,w_142" alt=""/>
                   </div>
                   <div className="my-body__infoms_mess">
                        <h3>南风草木香🍀</h3>
                        <div className="my-body__infoms_mess_phone">
                            <p>157****5643</p>
                            <a href="#">个人主页
                                <span className="iconfont">&#xe534;</span>
                            </a>
                        </div>
                   </div>
               </div>
               <div className="my-body__imgs"></div>
               <div className="my-body__tabbars"></div>
           </div>
           <div className="my-footer"></div>
        </div>
    )
}

My.propTypes = {
    
}

const Mys =  withRouter(My)
export default Mys