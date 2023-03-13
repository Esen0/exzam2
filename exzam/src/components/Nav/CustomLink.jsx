import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css"

function CustomLink({to, children}) {
  return (
    <NavLink className={styles.CustomLink} to={to}>
        {children}
    </NavLink>
  )
}

export default CustomLink