import React, { useState, useEffect } from 'react'
import ResultBox from './ResultBox'
import Image from './Image'
import styled from 'styled-components'
import axios from 'axios'

const MatchTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`
const MatchChar = styled.div`
  font-size: 14px;
  margin-top: 20px;
  height: 36px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 424px) {
      font-size: 11px;
    }
`
const Match = ({ title, chemi }) => {
  const [match, setMatch] = useState([]) // best or worst(chemi)로 받은 데이터

  const getMatch = async () => {
    const fetchedData = await axios.get(`https://ebti.realclass.co.kr/api/result/${chemi}`)
    setMatch(fetchedData.data)
  }

  useEffect(() => {
    getMatch()
  }, [])
  return (
    <ResultBox width='160px'>
      <MatchTitle>
        {title.split("\\n").map((txt) => (
          <div key={txt}>
            {txt}
            <br />
          </div>
        ))}
      </MatchTitle>
      <Image src={`https://public.realclass.co.kr/ebti/characters/${chemi}.png`} size='98px' />
      <MatchChar>
      &lt;{match.media}&gt;<br />{match.name}
      </MatchChar>
    </ResultBox>
  )
}

export default Match
