import React, { useState, useEffect } from 'react'
import ResultBox from './ResultBox'
import Image from './Image'
import styled from 'styled-components'
import axios from 'axios'

const MatchTitle = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
`
const MatchChar = styled.div`
  font-size: 12px;
  margin-top: 20px;
  height: 36px;
  display: flex;
  align-items: center;
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
