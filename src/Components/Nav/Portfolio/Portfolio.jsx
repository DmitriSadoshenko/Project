import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <NavLink to='/family'>FAMILY</NavLink>
            <NavLink to='/lovestory'>LOVESTORY</NavLink>
            <NavLink to='/portrait'>PORTRAIT</NavLink>
        </div>
    )
}

export default Portfolio