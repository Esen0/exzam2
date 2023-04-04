import React from 'react'
import { NavLink } from "react-router-dom"

function DinoLinks({to, children}) {
    return (
      <NavLink  to={to}>
          {children}
      </NavLink>
    )
  }

export default DinoLinks