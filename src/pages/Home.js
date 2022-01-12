import React from 'react'
import MainButton from '../components/MainButton'

const Home = () => {
  return (
    <div className='home'>
      <div className='search'>
        드라마&영화로 알아보는 나의 성향테스트
        <img src={'search-icon.png'} alt="search-icon" />
      </div>
      <img src={'title.png'} alt="title" />
      <img src={'poster.png'} alt="poster" />
      <MainButton content1='테스트' content2='시작하기'/>
    </div>
  )
}

export default Home
