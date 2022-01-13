import React from 'react'
import styled from 'styled-components'

const Select = styled.div`
  width: 280px;
  height: 72px;
  border-radius: 24.5px;
  margin-top: 25px;
  background-color: ${props => props.color || '#5963FF'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color === '#F1F1F1' ? 'black' : 'white'};
  :hover {
    cursor: pointer;
  }
`

const SelectButton = ({color}) => {
  return (
    <Select color={color}>
      몬스타엑스조아
    </Select>
  )
}

export default SelectButton
