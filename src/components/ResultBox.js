import React from 'react'
import TopSection from './TopSection'
import styled from 'styled-components'

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
  return (
    <RBox>
      <TopSection />
      <RSection>
        결과들
      </RSection>
    </RBox>
    
  )
}

export default ResultBox
