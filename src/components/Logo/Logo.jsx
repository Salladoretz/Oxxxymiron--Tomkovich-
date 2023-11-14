import React from 'react'
import logo from '../../images/logo.webp'
import { Link } from 'react-router-dom'


const Logo = () => (
    <div className='logo'>
        <Link to='/'>
            <img src={logo} alt='oxxxy' />
        </Link>
    </div>
)


export default Logo