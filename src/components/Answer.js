import React from 'react'
import { AnswerBackground } from '../styles/AnswerBackground.styled'

function Answer(props) {
  return (
    <AnswerBackground>
        <p>Answer: {props.answer}</p>
    </AnswerBackground>
  )
}

export default Answer