import React from 'react';
import VK from './img/vk.png'
import Instagram from './img/instagram.png'
import Facebook from './img/facebook.png'

const Footer = () => {
    return (
        <div className='footer-block'>
            <h3>СЛЕДИТЕ ЗА МНОЙ В СОЦСЕТЯХ</h3>
            <div className='block-icon'>
                <a target="_blank" href="https://www.vk.com/darya_sadoshenko/"><img src={VK}/></a>
                <a target="_blank" href="https://www.instagram.com/darya_sadoshenko/"><img src={Instagram}/></a>
                <a target="_blank" href="https://www.facebook.com/daryasadoshenko/"><img src={Facebook}/></a>
            </div>  
        </div>
    )
}

export default Footer