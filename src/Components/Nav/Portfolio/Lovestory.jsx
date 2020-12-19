import React from 'react';
import foto1 from '../../img/Artem&Vlada/IMG_5365.jpg'
import foto2 from '../../img/Sasha&Veronika/IMG_2756.jpg'
import foto3 from '../../img/Valera&iRA/IMG_1746.jpg'
import { NavLink } from 'react-router-dom';

const Lovestory = () => {
    return (
        <div className='family-container'>
            <NavLink to='/lovestory_foto_1'>
                <img src={foto1} alt=''/>
                <h3>Artem & Vlada</h3>
            </NavLink>
            <NavLink to='/lovestory_foto_2'>
                <img src={foto2} alt=''/>
                <h3>Sasha & Veronika</h3>
            </NavLink>
            <NavLink to='/lovestory_foto_3'>
                <img src={foto3} alt=''/>
                <h3>Valera & Ira</h3>
            </NavLink>
        </div>
        

    )
}

export default Lovestory