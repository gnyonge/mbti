import React from 'react'
import styled from 'styled-components'

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`

const Container = ({children}) => {
  return (
    <ContainerBox>{children}</ContainerBox>
  )
}

export default Container
