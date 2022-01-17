import React from 'react'
import styled from 'styled-components'
import { questionData } from '../data/questionData'
import { useDispatch } from 'react-redux'
import { setQuestions, setNow, setSelected } from '../reducers/mbti'


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

  function shuffle(array) { 
    for (let index = array.length - 1; index > 0; index--) { 
      const randomPosition = Math.floor(Math.random() * (index + 1)); 
      const temporary = array[index]; 
      array[index] = array[randomPosition]; 
      array[randomPosition] = temporary; 
    } 
    return array
  }

  let data = shuffle(questionData)
  for (let i=0; i<data.length; i++) {
    data[i].a = shuffle(data[i].a)
  }
  const dispatch = useDispatch();
  function saveData() {
    dispatch(setQuestions(data));
    dispatch(setNow(0));
    dispatch(setSelected(null));
  }
  return (
    <ButtonContainer onClick={saveData}>
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

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { questionData } from '../data/questionData'
import { useDispatch } from 'react-redux'
import { setQuestions, setNow, setSelected } from '../reducers/mbti'


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
    cursor: ${props => props.onClick ? 'pointer' : 'default'};
  }
`
const LeftContent = styled.div`
  color: #FFFFFF;
`
const RightContent = styled.div`
  color: #FFF086;
`
const MainButton = ({ content1, content2, onClick }) => {

  // function shuffle(array) { 
  //   for (let index = array.length - 1; index > 0; index--) { 
  //     const randomPosition = Math.floor(Math.random() * (index + 1)); 
  //     const temporary = array[index]; 
  //     array[index] = array[randomPosition]; 
  //     array[randomPosition] = temporary; 
  //   } 
  //   return array
  // }

  // let data = shuffle(questionData)
  // for (let i=0; i<data.length; i++) {
  //   data[i].a = shuffle(data[i].a)
  // }
  // const dispatch = useDispatch();
  // function saveData() {
  //   dispatch(setQuestions(data));
  //   dispatch(setNow(0));
  //   dispatch(setSelected(null));
  // }
  return (
    <>
    {
      content2 === '다시하기'
      ?
      <Link to='/' style={{ textDecoration: 'none' }}>
        <ButtonContainer onClick={onClick}>
          <LeftContent>
            {content1} 
          </LeftContent>
          <RightContent>
            {content2}
          </RightContent>
        </ButtonContainer>
      </Link>
      :
      <ButtonContainer onClick={onClick}>
        <LeftContent>
          {content1} 
        </LeftContent>
        <RightContent>
          {content2}
        </RightContent>
      </ButtonContainer>
    }
    </>
  )
}

export default MainButton
