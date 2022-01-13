import React from 'react'
import TopSection from './TopSection'
import SelectButton from './SelectButton'
import QuestionContent from './QuestionContent'
import ProgressBar from './ProgressBar'
import styled from 'styled-components'

const QBox = styled.div`
  background-color: #FFFFFF;
  width: 336px;
  height: 578px;
  border: solid 2px #000000;
  position: relative;
`
const QSection = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonBox = styled.div`
  position: absolute;
  bottom: 80px;  
`
const QuestionBox = () => {
  return (
    <QBox>
      <TopSection />
      <QSection>
        <ProgressBar />
        <QuestionContent content='질문입니다~~~'/>
        <ButtonBox>
          <SelectButton color='#F1F1F1'/>
          <SelectButton />
        </ButtonBox>
      </QSection>
    </QBox>
  )
}

export default QuestionBox
