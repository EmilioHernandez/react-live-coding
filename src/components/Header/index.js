import React from 'react'
import {Link} from 'wouter'

import useUser from 'hooks/useUser'

import './Header.css'

export default function Header () {
  const {isLogged, logout} = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <header className='gf-header'>
      <nav className='gf-header-nav'>
      {
        isLogged
          ? <Link to='#' onClick={handleClick}>
          Logout
          </Link>
          : <>
            <Link to='/login'>
              Login
            </Link>
            <Link to='/register'>
              Register
            </Link>
          </>
      }
      </nav>
    </header>
  )
}