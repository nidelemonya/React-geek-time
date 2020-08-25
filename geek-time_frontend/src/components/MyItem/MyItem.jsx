import React from 'react';
import { withRouter} from 'react-router'
// import PropTypes from 'prop-types';
import './MyItem.css';
import '../../assets/iconfont/iconfont.js';

function MyItem(props) {
    const handleChangeHref = (id, href) => {
        document.querySelector(`#ss${id}`).style.background = '#efefef';
        // console.log(href);
        let timeout = setTimeout(()=>{
            document.querySelector(`#ss${id}`).style.background = '#ffffff'
            props.history.push(href);
            if(timeout) clearTimeout(timeout);
        },200)
        // 哈希路由不能 push同一个路由 加一个随机数
    }
    const { item_list, balance } = props;
    // console.log (item_list)
    return (
        <div className="my-body__itemsBox">
            <div className="my-body__itemsBox_wrapper">
                {
                        // map 方法不会对空数组进行检测
                        item_list.map(i => {
                        return (
                                <div  className="items" key={i.id} id={`ss${i.id}`} onClick={()=> {
                                    handleChangeHref(i.id,i.href)
                                }}>
                                    <div className="item_lift">
                                        <span className="icon1 iconfont">{i.iconUrl}</span>
                                        <div className="name">{i.name}</div>
                                    </div>
                                    <div className="item-right">
                                        {/* 后期 100 改成 store */}
                                        <span className="count">{i.name === '账户'? balance: i.count}</span>
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