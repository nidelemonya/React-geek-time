import React from 'react';
// import PropTypes from 'prop-types';
import './MyAccount.css';


function MyAccount(props) {
    return (
        <div className="MyAccount">
            <div className="MyAccount-header">
                <span className="icon iconfont">&#xe571;</span>
                <span className="title">账户</span>
                <span className="enter">兑换入口</span>
            </div>
            <div className="MyAccount-balance">
                <div className="MyAccount-number"></div>
                <div className="MyAccount-img"></div>
            </div>
            <div className="MyAccount-container">
                <div className="MyAccount-topUp"></div>
                <div className="MyAccount-explain"></div>
            </div>
            
            
        </div>
    )
}  


export default MyAccount