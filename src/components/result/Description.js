import React from 'react'
import styled from 'styled-components'
import ResultBox from './ResultBox'

const DescriptionBox = styled.div`
  font-size: 13px;
  text-align: left;
  @media screen and (max-width: 424px) {
    font-size: 12px;
    }
`
const Description = ({ result }) => {
  return (
    <ResultBox>
      <DescriptionBox>
        <b>{result.description[0]}</b>
        <p>{result.description[1]}</p>
        <p>{result.description[2]}</p>
        <p>{result.description[3]}</p>
      </DescriptionBox>
    </ResultBox>
  )
}

export default Description
