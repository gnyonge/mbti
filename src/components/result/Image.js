import React from 'react'
import styled from 'styled-components'


const ImageBox = styled.div`
  width: ${props => props.size || '157px'};
  height: ${props => props.size || '157px'};
  border-radius: 50%;
  border: solid 1px black;
  img {
    width: 100%;
    height: 100%;
  }
`
const Image = ({ src, size }) => {
  return (
    <ImageBox size={size}>
      <img src={src} alt="mbti이미지" />
    </ImageBox>
  )
}

export default Image
