import React from 'react';
import img1 from '../../../img/Alina/IMG_6072.jpg'
import img2 from '../../../img/Alina/IMG_6080.jpg'
import img3 from '../../../img/Alina/IMG_6147.jpg'
import img5 from '../../../img/Alina/IMG_6278.jpg'
import img6 from '../../../img/Alina/IMG_6373.jpg'
import img7 from '../../../img/Alina/IMG_6386.jpg'
import img8 from '../../../img/Alina/IMG_6407.jpg'
import img9 from '../../../img/Alina/IMG_6410.jpg'
import img10 from '../../../img/Alina/IMG_6458.jpg'
import {NavLink} from 'react-router-dom'

const Portrait1 = () => {
    return (
        <div className='family1'>
            <h2>Alina</h2>
            <div className='family1-block'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
                <img src={img7} alt=""/>
                <img src={img8} alt=""/>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
            </div>
            <NavLink to='/portrait'>
                <button className='btn-exit'>
                ← НАЗАД К ГАЛЕРЕЯМ
                </button>
            </NavLink>
        </div>
    )
}
export default Portrait1