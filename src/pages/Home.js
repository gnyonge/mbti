import React from 'react'
import MainButton from '../components/MainButton'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <MainButton content1='테스트' content2='시작하기' />
      </Link>
    </HomeContainer>
  )
}

export default Home
