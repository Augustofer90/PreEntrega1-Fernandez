import React from 'react'
import "./navbar.scss"
import CartWidget from './CartWidget'
import logo from '../../src/assets/storeicon.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='name'>
            <img src={logo} alt=""  />
            <p>Ascisco Gaming Store</p>
        </div>

        <ul className='categorias'>
            <li>CPU</li>
            <li>Monitores</li>
            <li>GPU</li>
            <li>Perifericos</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar