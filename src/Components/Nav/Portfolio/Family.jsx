import React from 'react';
import foto1 from '../../img/Sasha,Sveta,Senya/IMG_3262.jpg'
import foto2 from '../../img/Liza & Atikus/IMG_0544.gif'
import foto3 from '../../img/Valera,Ira,Miron/IMG_1220.jpg'
import { NavLink } from 'react-router-dom';

const Family = () => {
    return (
        <div className='family-container'>
            <NavLink to='/family_foto_1'>
                <img src={foto1} alt=''/>
                <h3>Sasha, Sveta, Senya</h3>
            </NavLink>
            <NavLink to='/family_foto_2'>
                <img src={foto2} alt=''/>
                <h3>Liza & Atikus</h3>
            </NavLink>
            <NavLink to='/family_foto_3'>
                <img src={foto3} alt=''/>
                <h3>Valera, Ira, Miron</h3>
            </NavLink>
        </div>
        

    )
}

export default Family