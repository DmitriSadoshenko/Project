import React from 'react'
import { NavLink } from 'react-router-dom'
import Portfolio from '../Nav/Portfolio/Portfolio'

const Burger = () => {
    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul class="menu__box">
                <a class="portfolio-block">
                    <div className='portfolio-text'>PORTFOLIO</div> 
                    <div className='portfolio-container'><Portfolio /></div>
                </a>
                <NavLink class="menu__item" to='/about_me'>ABOUT ME</NavLink>
                <NavLink class="menu__item" to='/price'>PRICE</NavLink>
                <NavLink class="menu__item" to='/contacts'>CONTACTS</NavLink>
            </ul>
        </div>
    )
}
export default Burger