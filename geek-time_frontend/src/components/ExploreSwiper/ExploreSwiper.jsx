import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import './ExploreSwiper.css';

export default function ExploreSwiper(props) {
    // console.log(props)
    // 在 all 的下面 第0个
    const [slider_list] = useState([{
        id: 1,
        picUrl: 'https://static001.geekbang.org/resource/image/50/ff/50d16dd5d14de7d3d60e59b3fe5e82ff.jpg',
        linkUrl: '#'
      },
      {
        id: 2,
        picUrl: 'https://static001.geekbang.org/resource/image/18/3c/18fe9b2230d363bdec4ab2ba5c939b3c.png',
        linkUrl: '#'
      },
      {
        id: 3,
        picUrl: 'https://static001.geekbang.org/resource/image/96/15/96fc5769be076d9ea6aa88f13dc99115.png',
        linkUrl: '#'
      },
      {
        id: 4,
        picUrl: 'https://static001.geekbang.org/resource/image/20/ea/204d6a93eec84e73c79bb82e7aa52bea.png',
        linkUrl: '#'
      },{
        id: 5,
        picUrl: 'https://static001.geekbang.org/resource/image/7e/0a/7e672bcf2ae2yyd8880c81860b94720a.jpg',
        linkUrl: '#'
      }]);
    useEffect(()=> {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop:true,
            autoplay: {
                delay: 1000,
            },
            speed: 2000, 
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },        
          })
    },[])
    // 加个空数组防止一直刷新
    // console.log(slider_list)
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    slider_list.map(slider => {
                        return (
                            <div className="swiper-slide" key={slider.id}>
                                <a href={slider.linkUrl} className="slider-nav">
                                    <img src={slider.picUrl} alt={slider.picUrl} width="100%" height="100%" />
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

ExploreSwiper.propTypes = {
    // list_study:PropTypes.object.isRequired
}