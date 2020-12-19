import React from 'react';
import foto1 from '../../img/Alina/IMG_6410.jpg'
import foto2 from '../../img/tANYA/IMG_9833.jpg'
import { NavLink } from 'react-router-dom';

const Portrait = () => {
    return (
        <div className='portrait-container'>
            <NavLink to='/portrait_foto_1'>
                <img src={foto1} alt=''/>
                <h3>Alina</h3>
            </NavLink>
            <NavLink to='/portrait_foto_2'>
                <img src={foto2} alt=''/>
                <h3>Tanya</h3>
            </NavLink>
        </div>
        

    )
}

export default Portrait