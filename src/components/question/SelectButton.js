import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setNow, setSelected } from '../../reducers/mbti'
import { Link } from 'react-router-dom';

const Select = styled.div`
  width: 280px;
  height: 72px;
  font-size: 14px;
  border-radius: 24.5px;
  margin-top: 25px;
  background-color: ${props => props.color || '#5963FF'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.color === '#F1F1F1' ? 'black' : 'white'};
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 424px) {
      width: 100%;
    }
`

const SelectButton = ({color, answer}) => {
  const now = useSelector(state => state.mbti.now) // 현재 완료한 질문의 갯수
  const answerValue = answer.value // 선택지의 내용과 짝지어진 알파벳(mbti를 위한 값)

  const dispatch = useDispatch()

  function goNext(answerValue) {
    dispatch(setNow(now+1)) // 질문의 갯수 + 1
    dispatch(setSelected(answerValue)) // 선택된 값을 스토어에 저장
  }

  return ( 
    <>
      {
        now === 3
        ?  
        <Link to="/result" style={{ textDecoration: 'none' }}>
          <Select color={color} onClick={() => dispatch(setSelected(answerValue))}> 
            {answer.content.split("\n").map((txt) => (
              <div key={txt}>
                {txt}
                <br />
              </div>
            ))}
          </Select>
        </Link>
        : 
        <Select color={color} onClick={() => goNext(answerValue)} >
          {answer.content.split("\n").map((txt) => (
              <div key={txt}>
                {txt}
                <br />
              </div>
            ))}
        </Select>
      }
    </>

  )
}

export default SelectButton
