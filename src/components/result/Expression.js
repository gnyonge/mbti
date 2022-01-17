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
  padding: 5px 10px;
  margin-top: 20px;
  @media screen and (max-width: 424px) {
    font-size: 16px;
    }
`
const ExpressionBox = styled.div`
  font-weight: 500;
  color: #000D50;
  margin-top: 20px;
  @media screen and (max-width: 424px) {
    font-size: 14px;
    }
`

const Expression = ({ result }) => {
  const selected = useSelector(state => state.mbti.selected) // 선택된 알파벳들로 이루어진 문자열
  // 순서대로 정렬(mbtiData.js에서 key값으로 사용하면 데이터요청에 필요한 값을 가져올 수 있음)
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
