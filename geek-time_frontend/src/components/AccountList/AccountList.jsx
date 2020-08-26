import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const [handleColors, sethandleColors] = useState(1);
    const { topUp_list } = props;
    const { onSelected } = props;
    useEffect(() => {
        document.querySelector('#color1').style.background = "#fa8919"
        // document.getElementById("color1").style.color = "#fff"
        // console.log(document.getElementById('color1').style.color)
    }, [])
    const handleClick = (id, number) => {
        sethandleColors(id)
        // 获取上一次的id 值并将其 背景色修改为 原来的颜色
        document.querySelector(`#color${handleColors}`).style.background = "#f5f8fa"
        // document.querySelector(`#color${id}`).style.background = "#fa8919"
        document.querySelector(`#color${id}`).style.color = "#fffff"
        console.log(document.querySelector(`#color${id}`).style.color)
        
        onSelected(number);
    }
    return (
        <div className="Account-topUp-wrapBox">
            {
                topUp_list.map(m => {
                    return (
                        <div className='list white_color'
                            checked={m.checked} key={m.id}
                            onClick={() => {
                                // m.id
                                handleClick(m.id, m.number);
                            }}
                            id={`color${m.id}`}
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