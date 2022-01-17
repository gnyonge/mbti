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
  @media screen and (max-width: 424px) {
      width: 90%;
    }
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
  @media screen and (max-width: 424px) {
      width: 90%;
    }
`
const QuestionBox = () => {

  const questions = useSelector(state => state.mbti.questions) // 랜덤 정렬된 질문들
  const now = useSelector(state => state.mbti.now) // 현재 선택완료한 질문의 갯수
  const question = questions[now] // ex. 4개중에 3개 완료했으면 다음 질문 questions[3] 즉, 마지막 질문을 가져온다.

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
