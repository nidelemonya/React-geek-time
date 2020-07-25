import React from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';
import './ForumList.css';

export default function ForumList(props) {
    // console.log(props)
    const { infos } = props;
    console.log(infos)
    return (
        infos.data === undefined ? <React.Fragment></React.Fragment> : 
        <React.Fragment>
            {infos.data.infos.map (m => {
            return (
                <div key = {m.id} className="_33ly3o09_0">
                    <div className="_6Gc2XI7H_0">
                        <Lazyload height={60}>
                            <img src={m.author.avatar} alt="_6Gc2XI7H_0"></img>
                        </Lazyload>
                    </div>
                    <div className="_1yQOkMHx_0">
                    <h3 className="TsqvfD9D_0 NYryeJ04_0">{m.title}</h3>
                        <div className="YRXVEB34_0">
                            <span className="TsqvfD9D_0 vMl92iDh_0">{m.author.name}</span> 
                            <span className="TsqvfD9D_0 _2eQVglGQ_0">{m.author.intro}</span>
                        </div>
                        <div className="_3vYaOmbL_0">{m.unit} | 86952 人已学习</div>
                        <div className="_1bM8SW2e_0">
                            <div>
                                <div className="_1IaV9ida_0"><span className="_2K16-eHK_0 Yn8dN-Vi_0">
                                    <span className="GAUFEvc3_0">新人首单</span></span> <span className="_7ImCoNnW_0">¥{(m.extra.first_promo.price * 0.01).toFixed(1)}</span>
                                    <span className="orhJ42Kl_0">¥{m.price.market * 0.01}</span>
                                </div>
                            </div>
                            <div className="vUKD9DKA_0">试读</div>
                        </div>
                    </div>
                </div>
            )
        })}
        </React.Fragment>
    )
}

ForumList.propTypes = {
    infos:PropTypes.object.isRequired
}