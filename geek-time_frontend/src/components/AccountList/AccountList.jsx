import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const { topUp_list } = props;
    // var style  = 
    // for (let i=0; i<8; i++) {
    const [checked, setchecked] = useState(false)
    // }
    const handleClick = (a) => {
        console.log(a);
        // a = !a
        setchecked(!a)
    }
    return (
        <div className="Account-topUp-wrapBox">
            {
                topUp_list.map(i => {
                    return (
                        <div className = 'list' style={{
                            background:i.checked === true  ? 'orange':''
                        }}  checked={i.checked} key={i.id}
                            onClick={() => {
                                handleClick(i.checked)
                            }}
                        
                        >
                            <div className="list-top">
                                <span className="iconfont">{i.iconUrl}</span>
                                <span>{i.number}</span>
                            </div>
                            <div className="list-button">
                                <span>{i.count}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AccountList