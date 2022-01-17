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
  @media screen and (max-width: 424px) {
      width: 310px;
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
  @media screen and (max-width: 424px) {
      img {
        width: 90%;
      }
    }
`
const Poster = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 424px) {
      img {
        width: 90%;
      }
    }
`
const Home = () => {
  function shuffle(array) { // 질문배열을 랜덤으로 섞어서 반환하는 함수
    for (let index = array.length - 1; index > 0; index--) { 
      const randomPosition = Math.floor(Math.random() * (index + 1)); 
      const temporary = array[index]; 
      array[index] = array[randomPosition]; 
      array[randomPosition] = temporary; 
    } 
    return array
  }

  let data = shuffle(questionData) 
  for (let i=0; i<data.length; i++) { // 질문안에 선택지도 랜덤으로 만들어줌
    data[i].a = shuffle(data[i].a)
  }
  const dispatch = useDispatch();
  function saveData() {
    dispatch(setQuestions(data)); // 순서가 섞인 질문들을 저장함
    dispatch(setNow(0)); // 현재 선택완료한 질문의 갯수
    dispatch(setSelected(null)); // 현재 선택완료한 선택지(알파벳으로 된 문자열)
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
