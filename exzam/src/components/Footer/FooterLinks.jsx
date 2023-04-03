import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Footer.module.css"

function FooterLinks({to, children}) {
  return (
    <NavLink className={styles.CustomLink} to={to}>
        {children}
    </NavLink>
  )
}

export default FooterLinks