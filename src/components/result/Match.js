import React, { useState, useEffect } from 'react'
import ResultBox from './ResultBox'
import Image from './Image'
import styled from 'styled-components'
import axios from 'axios'

const MatchTitle = styled.div`
  font-size: 16px;
`
const MatchChar = styled.div`
  font-size: 13px;
`
const Match = ({ title, chemi }) => {
  const [match, setMatch] = useState([])

  const getMatch = async () => {
    const fetchedData = await axios.get(`https://ebti.realclass.co.kr/api/result/${chemi}`)
    setMatch(fetchedData.data)
    console.log(fetchedData.data)
  }

  useEffect(() => {
    getMatch()
  }, [])
  return (
    <ResultBox width='160px'>
      <MatchTitle>
        {title}
      </MatchTitle>
      <Image src={`https://public.realclass.co.kr/ebti/characters/${chemi}.png`} size='98px' />
      <MatchChar>
      &lt;{match.media}&gt;{match.name}
      </MatchChar>
    </ResultBox>
  )
}

export default Match
