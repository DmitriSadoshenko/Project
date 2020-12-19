import React from 'react';
import img1 from '../../../img/Sasha,Sveta,Senya/IMG_3262.jpg'
import img2 from '../../../img/Sasha,Sveta,Senya/IMG_3294.jpg'
import img3 from '../../../img/Sasha,Sveta,Senya/IMG_3316.jpg'
import img4 from '../../../img/Sasha,Sveta,Senya/IMG_3319.jpg'
import img5 from '../../../img/Sasha,Sveta,Senya/IMG_3339.jpg'
import img6 from '../../../img/Sasha,Sveta,Senya/IMG_3430.jpg'
import img7 from '../../../img/Sasha,Sveta,Senya/IMG_3526.jpg'
import img8 from '../../../img/Sasha,Sveta,Senya/IMG_3969.jpg'
import img9 from '../../../img/Sasha,Sveta,Senya/IMG_4012.jpg'
import img10 from '../../../img/Sasha,Sveta,Senya/IMG_4055.jpg'
import img11 from '../../../img/Sasha,Sveta,Senya/IMG_4079.jpg'
import img12 from '../../../img/Sasha,Sveta,Senya/IMG_4097.jpg'
import img13 from '../../../img/Sasha,Sveta,Senya/IMG_4116.jpg'
import img14 from '../../../img/Sasha,Sveta,Senya/IMG_4171.jpg'
import img15 from '../../../img/Sasha,Sveta,Senya/IMG_4184.jpg'
import { NavLink } from 'react-router-dom';



const Family1 = () => {
    return (
        <div className='family1'>
            <h2>Sasha, Sveta, Senya</h2>
            <div className='family1-block'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
                <img src={img7} alt=""/>
                <img src={img8} alt=""/>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
                <img src={img11} alt=""/>
                <img src={img12} alt=""/>
                <img src={img13} alt=""/>
                <img src={img14} alt=""/>
                <img src={img15} alt=""/>
            </div>
            <NavLink to='/family'>
                <button className='btn-exit'>
                ← НАЗАД К ГАЛЕРЕЯМ
                </button>
            </NavLink>
            
        </div>
    )
}
export default Family1