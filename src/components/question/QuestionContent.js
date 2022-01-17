import React from 'react'
import styled from 'styled-components'

const QContent = styled.div`
  width: 276px;
  height: max-content;
  font-size: 18px;
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
      {question.split("\n").map((txt) => ( // 텍스트 줄바꿈
          <div key={txt}>
            {txt}
            <br />
          </div>
        ))}
    </QContent>
  )
}

export default QuestionContent
