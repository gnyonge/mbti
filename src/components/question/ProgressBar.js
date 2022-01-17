import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  width: 271px;
  height: 29px;
  margin-top: 15px;
  margin-bottom: 30px;
  @media screen and (max-width: 424px) {
      width: 90%;
    }
`
const Bar = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  z-index: 3;
  border-radius: 4.5px;
  border: solid 1.4px black;
  background-size: 25%;
  background-image: linear-gradient(90deg, #000000 1.4px, transparent 1px);
`
const Now = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #00D37A;
  transition: all 0.2s;
  width: ${props => `${props.now*25}%`};
  height: 6.8px;
  border-radius: ${props => props.now !== 4 ? '4.5px 0px 0px 4.5px' : '4.5px'};
  border-right: solid 2.8px #00D37A;
`
const Progress = styled.div`
  display: flex;
  justify-content: end;
  font-size: 14px;
`
const ProgressBar = ({ now }) => {
  return (
    <BarContainer>
      <Progress>{now+1}/4</Progress>
      <div style={{position: 'relative'}}>
        <Bar />
        <Now now={now+1}></Now>
      </div>
    </BarContainer>
  )
}

export default ProgressBar
