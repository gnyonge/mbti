import React from 'react'
import styled from 'styled-components'

const QContent = styled.div`
  width: 276px;
  height: max-content;
`
const QMark = styled.div`
  color: #00D37A;
`
const QuestionContent = ({ question }) => {
  return (
    <QContent>
      <QMark>
        Q.
      </QMark>
      {question}
    </QContent>
  )
}

export default QuestionContent
