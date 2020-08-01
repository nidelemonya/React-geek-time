import React from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const { topUp_list } = props;
    const handleClick = (e) => {
        console.log(e);
    }
    return (
        <div className="Account-topUp-wrapBox">
            {
                topUp_list.map(m => {
                    return (
                        <div className = 'list' style={{
                            background:m.checked === true  ? 'orange':''
                        }}  checked={m.checked} key={m.id}
                            onClick={handleClick(m.checked)}
                        
                        >
                            <div className="list-top">
                                <span className="iconfont">{m.iconUrl}</span>
                                <span>{m.number}</span>
                            </div>
                            <div className="list-button">
                                <span>{m.count}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AccountList