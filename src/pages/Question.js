import React from 'react'
import QuestionBox from '../components/question/QuestionBox'
import styled from 'styled-components'

const QContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  @media screen and (max-width: 424px) {
      width: 310px;
    }
`
const Question = () => {
  return (
    <QContainer>
      <QuestionBox />
    </QContainer>
  )
}

export default Question

