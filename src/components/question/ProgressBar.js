import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  width: 271px;
  height: 29px;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Bar = styled.div`
  height: 4px;
  border-radius: 4.5px;
  border: solid 1.4px black;
`
const Now = styled.div`
  background-color: #00D37A;
  transition: all 0.2s;
  width: ${props => `${props.now*25}%` || '50%'};
  /* width: 50%; */
  height: 100%;
  border-radius: 4.5px;
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
      <Bar>
        <Now now={now+1}></Now>
      </Bar>
    </BarContainer>
  )
}

export default ProgressBar
