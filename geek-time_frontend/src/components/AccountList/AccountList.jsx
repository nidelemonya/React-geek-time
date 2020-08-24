import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const [dos, setdo] = useState("hidden");
    const { topUp_list } = props;
    const { onSelected } = props;
    useEffect(() => {
        document.querySelector('#do1').style.background = "#fa8919"
    },[])
    const handleClick = (id,number) => {
        // c = !c
        // console.log(number)
        document.querySelector('#do1').style.background = "#ffffff"
        document.querySelector('#do2').style.background = "#ffffff"
        document.querySelector('#do3').style.background = "#ffffff"
        document.querySelector('#do4').style.background = "#ffffff"
        document.querySelector('#do5').style.background = "#ffffff"
        document.querySelector('#do6').style.background = "#ffffff"
        document.querySelector('#do7').style.background = "#ffffff"
        document.querySelector('#do8').style.background = "#ffffff"
        document.querySelector('#do9').style.background = "#ffffff"
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
                            // // style={{ backgroundColor: "#fa8919" }}
                            // style={{
                            //     backgroundColor: m.checked === true  ? '#fa8919':'',
                            // }}          
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