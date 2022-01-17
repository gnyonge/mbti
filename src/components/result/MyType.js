import React from 'react'
import styled from 'styled-components'

const TypeBox = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  text-shadow: 1px 1px 0px #000;
  color: white;
`

const MyType = ({ result }) => {
  return (
    <TypeBox>
      {result.title}
    </TypeBox>
  )
}

export default MyType
