import React, { useEffect, useState } from 'react'
import TopSection from '../TopSection'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { mbtiData } from '../../data/mbtiData'
import axios from 'axios'

const RBox = styled.div`
  background-color: #FFFFFF;
  width: 336px;
  height: max-content;
  border: solid 2px #000000;
`
const RSection = styled.div`
  height: 300px;
  background-size: 5px, 5px, 5px 5px, 5px 5px;
  background-image: linear-gradient(90deg, #00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px), linear-gradient(#00000004 1px, transparent 1px), linear-gradient(#00000004 1px, transparent 1px);
`
const ResultBox = () => {
  const [result, setResult] = useState([])
  const selected = useSelector(state => state.mbti.selected)

  const getResult = async () => {
    let sorted = selected.split('').sort().join('')
    const fetchedData = await axios.get(`https://ebti.realclass.co.kr/api/result/${mbtiData[sorted]}`)
    setResult(fetchedData.data)
    console.log(result)
  }

  useEffect(() => {
    getResult()
  }, [])

  return (// store에 저장 후 result에서 뿌리기
    <RBox>
      <TopSection />
      <RSection>
        {
          result
          ?
          <div>{result.title}</div>
          :
          <div>로딩중</div>
        }
      </RSection>
    </RBox>
    
  )
}

export default ResultBox
