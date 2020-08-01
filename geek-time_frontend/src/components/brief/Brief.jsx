import React from 'react';
import './Brief.css';
export default function Brief(props) {
    // console.log(props);
    const { style, intro } = props;
    // console.log(intro);
    // console.log(style)
    return (
        intro.toJS().map((m, i) => {
            return (
                <div key={i} className="_1vEhpLOL_0" style={style}>
                    <div className="_2NKpEZ4f_0" >
                        {/*  dangerouslySetInnerHTML={{__html:m.column_intro}} */}
                        <div className="_2VrPoUeX_0">
                            {/* <h2>【今晚 24:00 涨价 | 设计模式之美】</h2> */}
                        </div>
                        <div className="_3uBK1dPI_0 _18IFJWYN_0">
                            <div className="_3CegnU7h_0">
                                <p>
                                    <a href="https://time.geekbang.org/column/intro/250?utm_term=zeusNS7B1&amp;utm_source=shujujiegou&amp;utm_medium=xiangqingye"><img src="https://static001.geekbang.org/resource/image/26/4f/2634630196a2c50aa15468a921480b4f.jpg" alt="unpreview" /></a>
                                小争哥「设计模式之美」，今晚 24:00 涨价至
                                <span className="orange">¥299</span>
                                ，现在秒杀+口令「wangzheng」，到手价仅
                                <span className="orange">¥129</span>
                                </p>
                            </div>
                        </div>
                        <div className="_3ooJE-Ce_0"></div>
                    </div>
                    <div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>你将获得</h2> </div>
                        <div className="_3uBK1dPI_0 _18IFJWYN_0">
                            <div className="_3CegnU7h_0"><
                                ul>
                                <li>
                                    <p>20个经典数据结构与算法；</p>
                                </li>
                                <li>
                                    <p>100个真实项目场景案例；</p>
                                </li>
                                <li>
                                    <p>文科生都能懂的算法手绘图解；</p>
                                </li>
                                <li>
                                    <p>轻松搞定BAT的面试通关秘籍。</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="_3ooJE-Ce_0">
                        </div>
                    </div>
                    <div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>讲师介绍</h2> </div> <div className="_1NA4oJIG_0">
                            <div className="_37qBN659_0">
                                <img src="https://static001.geekbang.org/resource/image/11/5b/11a3a5aa2f5879ec88b284044bacd55b.jpg?x-oss-process=image/resize,m_fill,h_200,w_200" alt="avatar" /> <div className="_2v-eHuf6_0"><h3 className="_3rMGtjcf_0">王争</h3> <div className="_3qYDQ8wS_0">前Google工程师</div></div> <div className="iconfont _1OZOD50w_0"></div></div></div> <div className="_3uBK1dPI_0 _18IFJWYN_0"><div className="_3CegnU7h_0"><p>王争，前Google工程师，从事Google翻译相关系统的开发，深入研究算法十余年。现任某金融公司核心系统资深系统架构师，负责公司核心业务的架构设计和开发。</p>
                                    <p>他将采用最适合工程师的学习方式，
                            <strong>不拘泥于某一特定编程语言</strong>，
                            从实际开发场景出发，由浅入深教你学习数据结构与算法的方法，帮你搞懂基本概念和核心理论，深入理解算法精髓，帮你提升使用数据结构和算法思维解决问题的能力。</p>
                                </div> </div> <div className="_3ooJE-Ce_0"></div></div>
                    <div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>课程介绍</h2> </div> <div className="_3uBK1dPI_0">
                            <div className="_3CegnU7h_0"><p>
                                踏上了编程之路，也就意味着你选择了一种终身学习的生活方式。每一个程序员都要练就十八般武艺，而掌握数据结构与算法就像修炼了九阳神功。换句话说，掌握了数据结构与算法，你的内功修炼速度就会有质的飞跃。</p>
                                <p>无论你是从事业务开发，想要评估代码性能和资源消耗；还是从事架构设计，想要优化设计模式；或者想要快速玩转热门技术，比如人工智能、区块链，都要先搞定数据结构与算法。因为，任凭新技术如何变化，只要掌握了这些计算机科学的核心“招式”，你就可以见招拆招，始终立于“不败之地”。</p>
                                <p>那怎样才能真正掌握数据结构与算法呢？是把常用的数据结构与算法背得滚瓜烂熟吗？即便如此，面对现实世界的千变万化，你也不太可能照搬某个算法解决即将遇到的下一个问题。因此，就像学习设计模式、架构模式一样，<strong>学习数据结构与算法的关键，在于掌握其中的思想和精髓，学会解决实际问题的方法</strong>。</p>
                                <p>专栏分为4个<strong>由浅入深</strong>的模块。</p>
                                <ul>
                                    <li><strong>入门篇</strong></li>
                                </ul>
                                <p>为什么要学习数据结构与算法？数据结构与算法该怎么学？学习的重点又是什么？这一模块将为你指明数据结构与算法的学习路径；并着重介绍贯穿整个专栏学习的重要概念：时间复杂度和空间复杂度，为后面的学习打好基础。</p>
                                <ul>
                                    <li><strong>基础篇</strong></li>
                                </ul>
                                <p>将介绍最常见、最重要的数据结构与算法。每种都从“来历”“特点”“适合解决的问题”“实际的应用场景”出发，进行详细介绍；并配有清晰易懂的手绘图解，由浅入深进行讲述；还适时总结一些实用“宝典”，教你解决真实开发问题的思路和方法。</p>
                                <p><img src="https://static001.geekbang.org/resource/image/92/9f/92b71261f3e5f37ffc49ced520e80c9f.jpg" alt="" /></p>
                                <ul>
                                    <li><strong>高级篇</strong></li>
                                </ul>
                                <p>将从概念和应用的角度，深入剖析一些稍复杂的数据结构与算法，推演海量数据下的算法问题解决过程；帮你更加深入理解算法精髓，开拓视野，训练逻辑；真正带你升级算法思维，修炼深厚的编程内功。</p>
                                <ul>
                                    <li><strong>实战篇</strong></li>
                                </ul>
                                <p>将通过实战案例串讲前面讲到的数据结构和算法；并拿一些开源项目和框架，剖析它们背后的数据结构和算法；并带你用学过的内容实现一个短网址系统；深化对概念和应用的理解，灵活使用数据结构和算法。</p>
                            </div>
                            <div className="_2p3Arjga_0">
                                <div className="_3c8AULUO_0">查看更多
    <span className="iconfont _3NDdjNCy_0"></span></div></div></div>
                        <div className="_3ooJE-Ce_0"></div></div>
                    <div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>课程目录</h2> </div>
                        <div className="_3uBK1dPI_0">
                            <div className="_3CegnU7h_0">
                                <p>
                                    <img src="https://static001.geekbang.org/resource/image/1b/ae/1b969cfe410a43d5f2b148c255beb3ae.jpg" alt="" /></p>
                            </div> <div className="_2p3Arjga_0"><div className="_3c8AULUO_0">查看更多<span className="iconfont _3NDdjNCy_0"></span>
                            </div>
                            </div>
                        </div>
                        <div className="_3ooJE-Ce_0"></div>
                    </div><div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>特别放送</h2>
                        </div>
                        <div className="_3uBK1dPI_0 _18IFJWYN_0">
                            <div className="_3CegnU7h_0">
                                <ol className="js-audit">
                                    <li>订阅后，分享专属海报，每邀请一位好友订阅有奖励。</li>
                                    <li>戳此添加社群管理员，<a href="https://jinshuju.net/f/OCQKLn ">进入技术交流&amp;福利群</a>。</li>
                                    <li>戳此<a href="https://promo.geekbang.org/activity/student-certificate?utm_source=app&amp;utm_medium=xiangqingye">申请学生认证</a>，订阅课程一律 5 折。</li>
                                    <li>最新课表抢先看，充值购课更优惠，限时充 ¥500 得 ¥580，
<a href="https://shop18793264.youzan.com/v2/feature/XRArFM4uO5?dc_ps=2534794065267047432.200001">戳此查看&gt;&gt;&gt;</a>
                                    </li>
                                    <p>
                                        <a href="time://mall?url=https%3A%2F%2Fshop18793264.youzan.com%2Fv2%2Ffeature%2FXRArFM4uO5">
                                            <img src="https://static001.geekbang.org/resource/image/48/e5/4863766d629aeaffe4d1f685fef117e5.png" alt="unpreview" /></a>
                                    </p>
                                </ol>
                            </div>
                        </div>
                        <div className="_3ooJE-Ce_0">
                        </div>
                    </div>
                    <div className="_2NKpEZ4f_0">
                        <div className="_2VrPoUeX_0">
                            <h2>订阅须知</h2>
                        </div>
                        <div className="_3uBK1dPI_0 _18IFJWYN_0">
                            <div className="_3CegnU7h_0">
                                <ol className="js-audit">
                                    <li>本专栏为订阅专栏，形式为图文+音频，现已更新完毕。订阅成功后，即可通过“极客时间”App端、小程序端、
                    <a href="https://time.geekbang.org/columns">Web端</a>永久阅读。
                    </li>
                                    <li>企业批量购买请点击“
                    <a href="https://time.geekbang.org/column/article/102047?utm_source=geektimeAPP&amp;utm_medium=DingYueXuZhi&amp;utm_campaign=qiyezhanghao">企业充值</a>
                    ”了解详情，可支持员工选课，企业支付。</li>
                                    <li>本专栏为虚拟商品，一经订阅，概不退款。
                </li>
                                </ol>
                            </div>
                        </div>
                        <div className="_3ooJE-Ce_0"></div></div></div>
            )
        })
    )
}