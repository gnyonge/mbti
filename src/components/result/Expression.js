import React from 'react'
import ResultBox from './ResultBox'
import styled from 'styled-components'
import Image from './Image'
import { useSelector } from 'react-redux'
import { mbtiData } from '../../data/mbtiData'

const TitleBox = styled.div`
  background-color: #5963FF;
  color: white;
  font-size: 19px;
  padding: 0 10px;
`
const ExpressionBox = styled.div`
  p {
    font-weight: 500;
    color: #000D50;
  }
`

const Expression = ({ result }) => {
  const selected = useSelector(state => state.mbti.selected)
  const sorted = selected.split('').sort().join('')
  return (
    <ResultBox>
      <Image src={`https://public.realclass.co.kr/ebti/characters/${mbtiData[sorted]}.png`}/>
      <TitleBox>
        {result.name} 유형들의 영어 한마디
      </TitleBox>
      <ExpressionBox>
        <p>{result.expression.en}</p>
        <p>{result.expression.ko}</p>
      </ExpressionBox>
    </ResultBox>
  )
}

export default Expression
