import React from 'react'
import styled from 'styled-components'

const TypeBox = styled.div`
  width: 336px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 12px;
`
const TextBox = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 22px;
  font-weight: bold;
  text-shadow: -1px 0 #000, 0 2px #000, 2px 0 #000, 0 -1px #000;
  color: white;
  position: absolute;
  letter-spacing: 2px;
`
const ColorBox = styled.div`
  position: absolute;
  background-color: #19A779;
  width: 90%;
  height: 20px;
  top: 20px;
  @media screen and (max-width: 424px) {
      width: 80%;
    }
`
const MyType = ({ result }) => {
  return (
    <TypeBox>
      <TextBox>
        {result.title}
      </TextBox>
      <ColorBox />
    </TypeBox>
  )
}

export default MyType
