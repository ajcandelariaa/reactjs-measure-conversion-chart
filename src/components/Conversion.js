import React from 'react'
import { Wrapper } from '../styles/Wrapper.styled'
import Form from './Form'

function Conversion(props) {
  return (
    <Wrapper>
        <p className='conversion-title'>{props.text}</p>
        <Form value={props.value} />
    </Wrapper>
  )
}

export default Conversion