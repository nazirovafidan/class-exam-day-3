import React from 'react'
import { Link } from "react-router-dom";
import './header.scss'

const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link to={'/'}>
             <p> colo<span>shop</span></p>
            </Link>
          </div>
          <div className='navs'>
            <nav>
              <Link to={'/'}>
                Home
              </Link>
              <Link to={'/add'}>
                Add
              </Link>
              <Link to={'/basket'}>
                Basket
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header