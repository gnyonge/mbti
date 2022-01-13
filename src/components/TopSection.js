import React from 'react'
import styled from 'styled-components'

const TopContainer = styled.div`
  background-color: #FFF086;
  border-bottom: solid 2px #000000;
  display: flex;
  padding: 3px 5px;
`
const RedCircle = styled.div`
  background-color: #F56A6A;
  border: solid 1.5px black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin-right: 3px;
`
const BlueCircle = styled.div`
  background-color: #5963FF;
  border: solid 1.5px black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
`
const TopSection = () => {
  return (
    <TopContainer>
      <RedCircle />
      <BlueCircle />
    </TopContainer>
  )
}

export default TopSection
