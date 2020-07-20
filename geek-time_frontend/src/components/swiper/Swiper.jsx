import React, { useEffect, useState } from 'react';
import Swiper from "swiper";
// import "swiper/css/swiper.min.css";

export default function Explore_swiper(props) {
    // console.log(props)
    // 在 all 的下面 第0个
    const [slider_list, setslider_list] = useState([{
        id: 1,
        picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4012436013,1663736653&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      },
      {
        id: 2,
        picUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3631898751,3282516408&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      },
      {
        id: 3,
        picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349951685,2269846305&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      }]);
    useEffect(()=> {
        new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
              delay: 2000,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            }
          })
    })
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    slider_list.map(slider => {
                        return (
                            <div className="swiper-slide" key={slider.id}>
                                <a href={slider.linkUrl} className="slider-nav">
                                    <img src={slider.picUrl} alt="" width="100%" height="100%" />
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}

Explore_swiper.propTypes = {
    // list_study:PropTypes.object.isRequired
}