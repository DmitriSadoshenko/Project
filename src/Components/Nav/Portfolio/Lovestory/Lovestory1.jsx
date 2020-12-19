import React from 'react';
import img1 from '../../../img/Artem&Vlada/IMG_5140.jpg'
import img2 from '../../../img/Artem&Vlada/IMG_5146.jpg'
import img3 from '../../../img/Artem&Vlada/IMG_5257.jpg'
import img4 from '../../../img/Artem&Vlada/IMG_5258.jpg'
import img5 from '../../../img/Artem&Vlada/IMG_5277.jpg'
import img6 from '../../../img/Artem&Vlada/IMG_5280.jpg'
import img7 from '../../../img/Artem&Vlada/IMG_5365.jpg'
import img8 from '../../../img/Artem&Vlada/IMG_5405.jpg'
import img9 from '../../../img/Artem&Vlada/IMG_5428.jpg'
import img10 from '../../../img/Artem&Vlada/IMG_5436.jpg'
import img11 from '../../../img/Artem&Vlada/IMG_5460.jpg'
import img12 from '../../../img/Artem&Vlada/IMG_5473.jpg'
import {NavLink} from 'react-router-dom'

const Lovestory1 = () => {
    return (
        <div className='family1'>
            <h2>Artem & Vlada</h2>
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
            </div>
            <NavLink to='/lovestory'>
                <button className='btn-exit'>
                ← НАЗАД К ГАЛЕРЕЯМ
                </button>
            </NavLink>
        </div>
    )
}
export default Lovestory1