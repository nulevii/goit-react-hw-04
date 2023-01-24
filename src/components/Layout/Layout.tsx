import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import styles from './style.module.css'

function Layout (): JSX.Element {
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink className={styles.navLink} to="/">Home</NavLink>
        <NavLink className={styles.navLink} to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
