import React from 'react';
import LogoContainer from './Logo';
import {NavLink} from "react-router-dom"
import Portfolio from './Portfolio/Portfolio';
import Burger from '../Burger/Burger';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-container">
                <a className='portfolio-block'>
                    <div className='portfolio-text'>PORTFOLIO</div> 
                    <div className='portfolio-container'><Portfolio /></div>
                </a>
                <NavLink to='/about_me'>ABOUT ME</NavLink>
                <LogoContainer />
                <NavLink to='/price'>PRICE</NavLink>
                <NavLink to='/contacts'>CONTACTS</NavLink>
                <Burger />
            </ul>
        </nav>
    )
}

export default Nav