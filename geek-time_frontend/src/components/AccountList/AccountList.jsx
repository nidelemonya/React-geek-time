import React from 'react';
// import PropTypes from 'prop-types';
import './AccountList.css';
import '../../assets/iconfont/iconfont.js';
// import { Link } from 'react-router-dom';

function AccountList(props) {
    const { topUp_list } = props;
    const { onSelected } = props;
    // const handleClick = (id) => () => {
    //     console.log(11111111, id);
    // }
    const handleClick = (number) => {
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
                                handleClick(m.number);
                                
                            }}
                            // style={{
                            //     // backgroundColor:m.checked === true  ? 'orange':'',
                            // }} 
                            
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