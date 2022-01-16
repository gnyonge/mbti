import React from 'react'
import { useSelector } from 'react-redux'
import TopSection from '../TopSection'
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

  const questions = useSelector(state => state.mbti.questions)
  const now = useSelector(state => state.mbti.now)
  const question = questions[now]

  return (
    <QBox>
      <TopSection />
      <QSection>
        <ProgressBar now={now}/>
        <QuestionContent question={question.q}/>
        <ButtonBox>
          <SelectButton color='#F1F1F1' answer={question.a[0]} />
          <SelectButton answer={question.a[1]} />
        </ButtonBox>
      </QSection>
    </QBox>
  )
}

export default QuestionBox
