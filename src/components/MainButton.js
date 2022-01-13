import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.button`
  border: solid 2px black;
  border-radius: 35px;
  background-color: #5963FF;
  width: 278px;
  height: 49px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`
const LeftContent = styled.div`
  color: #FFFFFF;
`
const RightContent = styled.div`
  color: #FFF086;
`
const MainButton = ({ content1, content2 }) => {
  return (
    <ButtonContainer>
      <LeftContent>
        {content1} 
      </LeftContent>
      <RightContent>
        {content2}
      </RightContent>
    </ButtonContainer>
  )
}

export default MainButton
