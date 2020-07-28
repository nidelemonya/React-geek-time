import React, { useState } from 'react'
import './Account.css';
import { accountToUp } from '../../../api/config';
import AccountList from '../../../components/AccountList/AccountList'

export default function Account(props) {
    console.log(accountToUp)
    return (
        <div className="Account">
            <div className="Account-header">
                <span className="icon iconfont">&#xe571;</span>
                <span className="title">账户</span>
                <span className="enter">兑换入口</span>
            </div>
            <div className="Account-balance">
                <div className="Account-number">
                    <div className="money">
                        <span className="iconfont">&#xe601;</span>
                        <span>0.00</span>
                    </div>
                    <div className="count">
                        充值币0.00  |  赠币0.00
                    </div>
                    <div className="check">查看明细</div>
                </div>
                <div className="Account-img">
                    <img src="https://static001.geekbang.org/resource/image/91/c8/91737babb23443edf732471fc41e22c8.png" alt="" />
                </div>
            </div>
            <div className="Account-container">
                <div className="Account-topUp">
                    <div className="Account-topUp-title">
                        <span className="title">充值</span>
                        <span className="name">(  充值金额仅限 Android 系统使用  )</span>
                    </div>
                    <div className="Account-topUp-wrap" >
                        <AccountList topUp_list ={accountToUp[0].data.list} />
                    </div>
                    <div className="Account-topUp-affirm">
                        <button className="Account-topUp-affirm-btn">确认充值</button>
                    </div>
                </div>
                <div className="Account-explain">
                    <div className="Account-explain-title">
                        <div className="name">充值说明</div>
                    </div>
                    <div className="Account-explain-detail">
                        <p>1.充值金额不会过期，不支持退款、提现或转赠他人;</p>
                        <p>2.因苹果政策，ios 平台和安卓平台的充值余额不支持跨平台使用;</p>
                        <p>3. iOS App内的充值订单，若您需要开票，请联系苹果客服咨询相关事宜;</p>
                        <p>4.充值如遇到问题，请关注<span>【极客时间】</span>微信服务号，向我们反馈你的问题，我们会为你解决。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}