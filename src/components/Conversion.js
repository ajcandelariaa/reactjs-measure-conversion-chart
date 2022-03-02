import React from 'react'
import Form from './Form'

function Conversion(props) {
  return (
    <div>
        <h1>{props.text}</h1>
        <Form value={props.value} />
    </div>
  )
}

export default Conversion