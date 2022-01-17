import React from 'react'
import styled from 'styled-components'


const ButtonContainer = styled.button`
  border: solid 2px black;
  border-radius: 35px;
  background-color: ${props => props.color ? '#F56A6A' : '#5963FF'};
  width: 278px;
  height: 49px;
  font-size: ${props => props.content1.length > 6 ? `${28-props.content1.length}px`:'26px'};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: ${props => props.content1 === '테스트' ? 'pointer' : 'default'};
  }
`
const LeftContent = styled.div`
  color: #FFFFFF;
`
const RightContent = styled.div`
  color: #FFF086;
`
const MainButton = ({ content1, content2, onClick, color }) => {

  return (
    <ButtonContainer onClick={onClick} content1={content1} color={color}>
      <LeftContent content1={content1}>
        {
          content1 !== '테스트' 
          ?
          <div>&lt;{content1}&gt;</div>
          :
          <div>{content1}</div>
        } 
      </LeftContent>
      <RightContent>
        {content2}
      </RightContent>
    </ButtonContainer>
  )
}

export default MainButton
