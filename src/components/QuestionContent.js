import React from 'react'
import styled from 'styled-components'

const QContent = styled.div`
  width: 276px;
  height: max-content;
`
const QMark = styled.div`
  color: #00D37A;
`
const QuestionContent = ({content}) => {
  return (
    <QContent>
      <QMark>
        Q.
      </QMark>
      {content}
    </QContent>
  )
}

export default QuestionContent
