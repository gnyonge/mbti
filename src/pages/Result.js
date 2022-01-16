import React, { useEffect, useState } from 'react'
import ResultBox from '../components/result/ResultBox'
import { useSelector } from 'react-redux'
import { mbtiData } from '../data/mbtiData'
import axios from 'axios'
import styled from 'styled-components'
import Image from '../components/result/Image'

const RContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`
const TitleBox = styled.div`
  background-color: #5963FF;
  color: white;
  font-size: 19px;
  padding: 0 10px;
`
const ExpressionBox = styled.div`
  p {
    font-weight: 500;
  }
`
const DescriptionBox = styled.div`
  padding: 20px 10px;
  font-size: 13px;
  text-align: left;
`

const MatchContainer = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`
const MatchTitle = styled.div`
  font-size: 18px;
`
const MatchChar = styled.div`
  font-size: 13px;
`
const Result = () => {
  const [result, setResult] = useState([])
  const selected = useSelector(state => state.mbti.selected)
  const sorted = selected.split('').sort().join('')

  const getResult = async () => {
    const fetchedData = await axios.get(`https://ebti.realclass.co.kr/api/result/${mbtiData[sorted]}`)
    setResult(fetchedData.data)
    console.log(fetchedData.data)
  }

  useEffect(() => {
    getResult()
  }, [])

  return (
    <>
      {
        result.length !== 0
        ?
        <RContainer>
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
          <ResultBox>
            <DescriptionBox>
              <b>{result.description[0]}</b>
              <p>{result.description[1]}</p>
              <p>{result.description[2]}</p>
              <p>{result.description[3]}</p>
            </DescriptionBox>
          </ResultBox>
          <MatchContainer>
            <ResultBox width='160px'>
              <MatchTitle>
                만나면 좋은 캐릭터
              </MatchTitle>
              <Image src={`https://public.realclass.co.kr/ebti/characters/${result.chemi.best}.png`} size='98px' />
              <MatchChar>

              </MatchChar>
            </ResultBox>
            <ResultBox width='160px'> 
              <MatchTitle>
                거리두기가 필요해요
              </MatchTitle>
              <Image src={`https://public.realclass.co.kr/ebti/characters/${result.chemi.worst}.png`} size='98px' />
            </ResultBox>
          </MatchContainer>
          <ResultBox>
            공유
          </ResultBox>
        </RContainer>
        :
        <h1>로딩중</h1>
      }
    </>
    
  )
}

export default Result
