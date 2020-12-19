import React from 'react'
import { NavLink } from 'react-router-dom'
import Portfolio from '../Nav/Portfolio/Portfolio'

const Burger = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <a className="portfolio-block">
                    <div className='portfolio-text'>PORTFOLIO</div> 
                    <div className='portfolio-container'><Portfolio /></div>
                </a>
                <NavLink className="menu__item" to='/about_me'>ABOUT ME</NavLink>
                <NavLink className="menu__item" to='/price'>PRICE</NavLink>
                <NavLink className="menu__item" to='/contacts'>CONTACTS</NavLink>
            </ul>
        </div>
    )
}
export default Burger