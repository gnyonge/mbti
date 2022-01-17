import React from 'react'
import MainButton from '../components/MainButton'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { questionData } from '../data/questionData'
import { useDispatch } from 'react-redux'
import { setQuestions, setNow, setSelected } from '../reducers/mbti'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: fit-content;
  }
`
const Search = styled.div`
  background-color: #FFFFFF;
  width: 246px;
  height: 23.27px;
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 70px;
  font-size: 11px;
`
const Title = styled.div`
  margin: 30px 0;
`
const Poster = styled.div`
  margin-bottom: 40px;
`
const Home = () => {
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
    <HomeContainer>
      <Search>
        드라마&영화로 알아보는 나의 성향테스트
        <img src={'search-icon.png'} alt="search-icon" />
      </Search>
      <Title>
        <img src={'title.png'} alt="title" />
      </Title>
      <Poster>
        <img src={'poster.png'} alt="poster" />
      </Poster>
      <Link to='/question' style={{ textDecoration: 'none' }}>
        <MainButton content1='테스트' content2='시작하기' onClick={saveData}/>
      </Link>
    </HomeContainer>
  )
}

export default Home
