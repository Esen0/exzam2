import React from 'react'
import { NavLink } from "react-router-dom"

function PinoLinks({to, children}) {
    return (
      <NavLink  to={to}>
          {children}
      </NavLink>
    )
  }

export default PinoLinks