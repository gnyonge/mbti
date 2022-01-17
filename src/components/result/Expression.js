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
  padding: 2px 10px;
  margin-top: 20px;
`
const ExpressionBox = styled.div`
  font-weight: 500;
  color: #000D50;
  margin-top: 20px;
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
        {result.expression.en.split("\n").map((txt) => (
          <div key={txt}>
            {txt}
            <br />
          </div>
        ))}
      </ExpressionBox>
      <ExpressionBox>
        {result.expression.ko.split("\n").map((txt) => (
          <div key={txt}>
            {txt}
            <br />
          </div>
        ))}
      </ExpressionBox>
    </ResultBox>
  )
}

export default Expression
