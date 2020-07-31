import React from 'react';

export default function Comment(props) {
    const { style, commentList } = props
    console.log(commentList);
    return (
        <div style={style}>
            <div className="AEQMMag__0" columndata="[object Object]">
                <div className="_2qEA6KRz_0">
                    <img src="https://static001.geekbang.org/account/avatar/00/1e/7e/a4/222287bc.jpg" className="_2kUU_o1K_0" />
                    <div className="_2Vntm3ZR_0">
                        <div className="_2DK-_zXj_0">
                            <div>
                                <div className="ccS-euc9_0">Asherah</div>
                                <div className="_3Gfsvskq_0">2020-06-18</div>
                            </div>
                            <div className="O8LxZNoL_0">
                                <i className="iconfont"></i>
                                <span className=""></span>
                            </div></div>
                        <div>
                            <div className="_14_4h0Yt_0">我会先看市场上是否已经有成熟落地的产品，
                                        <p>验证方式：苹果商店/安卓应用</p>
                                <p>产品形式：应用市场对资讯产品类的展现形式</p>
                                <p>举个例子，可能会有时事评论、语音播报、视频播报、纸媒播报的各类形式。对他们的下载量做一个统计</p>
                                <p>产品分析：之前经历过培训，了解人对于接收信息方式有倾向，比如有的人对文字理解速度很快，有些对于声音比起文字更容易。所以我依据听说读写，把收集的软件按着做一个归类。挑选最常用的几类代表产品，但如果产品数量不多先记录。</p>
                                <p>问卷调查：挑选五个职业不同朋友。</p>
                                <p>目标，选出用户最舒服获取资讯方式</p>
                                <p>1）打开手机查看一天占用时间最多的软件？</p>
                                <p>2）平时有阅读新闻习惯，会在什么时间？</p>
                                <p>3）你会和身边朋友家人分享读到资讯吗？</p>
                                <p>4）平时有阅读计划吗？</p>
                                <p>5）平时有写日记习惯吗？</p>
                                <p>6）有喜欢的电台吗？或主持人？或从来不听？</p>
                                <p>感觉到这里，调查后的数据可以快速做简单原型给这几位朋友看看，最后在多邀请朋友实验</p>
                                <p>如果有些产品在收集没有，可以根据问卷调查挖掘用户习惯设计在原型，用户测试时候验证</p></div>
                            <div className="_1tqXAGEh_0">
                                <span>展开</span>
                                <i className="iconfont"></i>
                            </div>
                        </div></div></div>
                </div>
            </div> 
    )
}