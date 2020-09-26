import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';

function AccountList(props) {
    const [active, setActive] = useState(1)
    const { topUp_list } = props;
    const { onSelected } = props;
    
    useEffect(() => {
        document.querySelector('#color1').style.background = "#fa8919"
        document.querySelector(`#list-top1`).style.color = "#ffffff"
        document.querySelector(`#list-button1`).style.color = "#ffffff"
    }, [])
    const handleClick = (id, number) => {
        
        console.log('函数里面的',active)
        // 获取上一次的 id 值并将其 背景色修改为 原来的颜色
        document.querySelector(`#color${active}`).style.background = "#f5f8fa"
        document.querySelector(`#color${id}`).style.background = "#fa8919"

        document.querySelector(`#list-top${active}`).style.color = "#5c5d5a"
        document.querySelector(`#list-top${id}`).style.color = "#ffffff"

        document.querySelector(`#list-button${active}`).style.color = "#b9bcbc"
        document.querySelector(`#list-button${id}`).style.color = "#ffffff"
        onSelected(number);
        setActive(id) // 因为 setState 是异步。
    }
    console.log('函数外面的',active)
    return (
        <div className="Account-topUp-wrapBox">
            {
                topUp_list.map(m => {
                    return (
                        <div className='list'
                            checked={m.checked} key={m.id}
                            onClick={() => {
                                handleClick(m.id, m.number);
                            }}
                            id={`color${m.id}`}>
                            <div className="list-top" id={`list-top${m.id}`}>
                                <span className="iconfont">{m.iconUrl}</span>
                                <span>{m.number}</span>
                            </div>
                            <div className="list-button" id={`list-button${m.id}`}>
                                <span>{m.count}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
AccountList.propTypes = {
    topUp_list:PropTypes.array.isRequired,
    onSelected:PropTypes.func.isRequired
}
export default AccountList