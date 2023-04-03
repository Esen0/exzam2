import React from 'react'
import  "./Modal.module.css"

const Modal = ({active, setActive}) => {
  return (
//     <div className={active ? "modal active" : "modal" } onClick={() => setActive(false)}>
//       <div className={active ? "modal__content active" : "modal__content" } onClick={e => e.stopPropagation()}>
// dsdfdsfsdfdsfdsf
//       </div>
//     </div>
<div className="123" onClick={alert("work")}>
  123
</div>
  )
}

export default Modal