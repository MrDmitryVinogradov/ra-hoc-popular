import React from 'react'

function Wrapper(props) {
  return (
    <div className={`wrap-item wrap-item-${props.label}`} >
      <span className="label">{props.name}</span>
      {props.children}
    </div>
  )
}

export default Wrapper
