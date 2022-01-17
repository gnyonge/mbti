import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { mbtiData } from '../data/mbtiData'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Expression from '../components/result/Expression'
import Description from '../components/result/Description'
import Share from '../components/result/Share'
import Match from '../components/result/Match'
import MainButton from '../components/MainButton'
import MyType from '../components/result/MyType'


const RContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`

const MatchContainer = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`
const Loading = styled.div`
  font-size: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
  }
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
          <MyType result={result}/>
          <MainButton content1={result.media} content2={result.name} />
          <Expression result={result} />
          <Description result={result}/>
          <MatchContainer>
            <Match title='만나면\n좋은 캐릭터' chemi={result.chemi.best}/>
            <Match title='거리두기가\n필요해요' chemi={result.chemi.worst}/>
          </MatchContainer>
          <Share />
          <Link to='/' style={{ textDecoration: 'none', marginTop: '30px'}}>
            <MainButton content1='테스트' content2='다시하기' color='#F56A6A'/>
          </Link>
        </RContainer>
        :
        <Loading>
          <img src={'로딩중.png'} alt="loading" />
          Loading...
        </Loading>
      }
    </>
    
  )
}

export default Result
