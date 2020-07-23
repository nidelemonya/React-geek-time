import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import './MySwiper.css';

export default function MySwiper(props) {
    // console.log(props)
    // 在 all 的下面 第0个
    const [slider_list] = useState([{
        id: 1,
        picUrl: 'https://static001.geekbang.org/resource/image/6c/36/6ce1b094f89ed42ecbe334f4ef2e9a36.png',
        linkUrl: '#'
      },
      {
        id: 2,
        picUrl: 'https://static001.geekbang.org/resource/image/cc/a7/ccb6575b43e2e7ae69a76b43b1d022a7.png',
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
        </div>
    )
}

MySwiper.propTypes = {
    // list_study:PropTypes.object.isRequired
}