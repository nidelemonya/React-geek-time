import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const [dos, setdo] = useState(1);
    const { topUp_list } = props;
    const { onSelected } = props;
    useEffect(() => {
        document.querySelector('#do1').style.background = "#fa8919"
    },[])
    const handleClick = (id,number) => {
        setdo(id)
        // 获取上一次的id 值并将其 背景色修改为 原来的颜色
        document.querySelector(`#do${dos}`).style.background = "#f5f8fa"
        document.querySelector(`#do${id}`).style.background = "#fa8919"
        onSelected(number);
    }
    return (
        <div className="Account-topUp-wrapBox">
            {
                topUp_list.map(m => {
                    return (
                        <div className = 'list' 
                            checked={m.checked} key={m.id}
                            onClick={() => {
                                // m.id
                                handleClick(m.id,m.number);
                            }}
                            id={`do${m.id}`}        
                        >
                            <div className="list-top" >
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