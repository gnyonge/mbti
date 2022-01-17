import React from 'react'
import ResultBox from './ResultBox'
import styled from 'styled-components'

const ShareBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  img {
    width: fit-content;
    height: fit-content;
  }
`
const TextBox = styled.div`
  font-size: 18px;
`
const Share = () => {
  return (
    <ResultBox>
      <TextBox>
        결과 공유하고, 친구와 궁합 확인하기
      </TextBox>
      <ShareBox>
        <img src={'카카오톡.png'} alt="kakaotalk" />
        <img src={'트위터.png'} alt="twitter" />
        <img src={'링크.png'} alt="linkshare" />
      </ShareBox>
    </ResultBox>
  )
}

export default Share
