import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Img1 from './img/IMG_1553.jpg'
import Img2 from './img/IMG_1271.jpg'
import Img3 from './img/IMG_3169.jpg'
import Img4 from './img/IMG_9896.jpg'

const PhotoCarousel = () => {
    return (
        <Carousel autoplay>
          <div className='carousel'>
            <img src={Img1} alt=""/>
          </div>
          <div className='carousel'>
            <img src={Img2} alt=""/>
          </div>
          <div className='carousel'>
            <img src={Img3} alt=""/>
          </div>
          <div className='carousel'>
            <img src={Img4} alt=""/>
          </div>
        </Carousel>
      )
} 

export default PhotoCarousel