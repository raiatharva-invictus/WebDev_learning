import React from 'react'
import Component from './Component'

const Button = ({count}) => {
  return (
    <div>
      <button><Component count={count}/> I am a button</button>
    </div>
  )
}

export default Button