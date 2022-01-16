import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setNow, setSelected } from '../../reducers/mbti'
import { Link } from 'react-router-dom';

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

const SelectButton = ({color, answer}) => {
  const now = useSelector(state => state.mbti.now)
  const answerValue = answer.value

  const dispatch = useDispatch()

  function goNext(answerValue) {
    dispatch(setNow(now+1))
    dispatch(setSelected(answerValue))
  }

  return ( 
    <>
      {
        now === 3
        ?  
        <Link to="/result">
          <Select color={color} onClick={() => dispatch(setSelected(answerValue))}> 
            {answer.content}
          </Select>
        </Link>
        : 
        <Select color={color} onClick={() => goNext(answerValue)} >
          {answer.content}
        </Select>
      }
    </>

  )
}

export default SelectButton
