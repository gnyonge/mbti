import React from 'react'
import TopSection from '../TopSection'
import styled from 'styled-components'

const RBox = styled.div`
  background-color: #FFFFFF;
  width: ${props => props.width || '336px'};
  height: max-content;
  border: solid 2px #000000;
  margin: 12px 0;
`
const RSection = styled.div`
  height: max-content;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 5px, 5px, 5px 5px, 5px 5px;
  background-image: linear-gradient(90deg, #00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px), linear-gradient(#00000004 1px, transparent 1px), linear-gradient(#00000004 1px, transparent 1px);
`
const ResultBox = ({ children, width }) => {
  return (
    <RBox width={width}>
      <TopSection />
      <RSection>
        {children}
      </RSection>
    </RBox>
    
  )
}

export default ResultBox
