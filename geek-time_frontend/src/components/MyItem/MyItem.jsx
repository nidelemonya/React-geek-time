import React,{useState} from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './MyItem.css';
import '../../assets/iconfont/iconfont.js';

function MyItem(props) {
    const [item_list,setState] = useState([
        {
            id:1,
            iconUrl:'&#xe605;',
            name:'账户',
            count: '0.0'
        },
        {
            id:2,
            iconUrl:'&#xe61d;',
            name:'我的课程',
            count: ''
        },
        {
            id:3, 
            iconUrl:'&#xe677;',
            name:'我的订单',
            count: ''
        }
    ])
    return (
        <div className="my-body__itemsBox">
            <div className="my-body__itemsBox_wrapper">
                {
                    item_list.map(i => {
                        return(
                            <div className="items" key={i.id}>
                                <div className="item_lift">
                        {/* <span className="icon1 iconfont">{i.iconUrl}</span> */}
                                    <div className="name">{i.name}</div>
                               </div>
                                <div className="item-right">
                                    <span className="count">{i.count}</span>
                                    <span className="icon2 iconfont">&#xe534;</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

MyItem.propTypes = {

}

const MyItems = withRouter(MyItem)
export default MyItems