import React from 'react'
import Form from './Form'

function Conversion(props) {
  return (
    <div>
        <h1>{props.text}</h1>
        <Form value={props.text} />
    </div>
  )
}

export default Conversion