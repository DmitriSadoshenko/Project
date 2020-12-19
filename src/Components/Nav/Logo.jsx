import React from 'react';
import logo from './../img/logo.png'
import {useHistory} from 'react-router-dom'

const LogoContainer = (props) => {
    let history = useHistory();
    
    const handleClick = () => {
      history.push("/");
    }
    return (
        <div className='logo-container'>
            <button onClick={handleClick}><img src={logo} alt='DaryaSadoshenko' /></button>
        </div>
    )
}

export default LogoContainer