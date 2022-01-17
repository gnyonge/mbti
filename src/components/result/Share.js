import React, {useRef} from 'react'
import ResultBox from './ResultBox'
import styled from 'styled-components'

const ShareBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 35px;
  position: relative;
  img {
    width: fit-content;
    height: fit-content;
  }
`
const TextBox = styled.div`
  font-size: 18px;
  @media screen and (max-width: 424px) {
    font-size: 16px;
    }
`
const TextArea = styled.textarea`
  position: absolute;
  opacity: 0;
`

const Share = () => {
  const copyUrl = (e) => {
    if (!document.queryCommandSupported("copy")) { 
      return alert("복사 기능이 지원되지 않는 브라우저입니다."); 
    }
    copyUrlRef.current.select(); 
    document.execCommand('copy'); 
    e.target.focus();
    setTimeout(() => {
      alert('복사가 완료되었습니다.')
    }, 200);
  }
  const copyUrlRef = useRef()

  return (
    <ResultBox>
      <TextBox>
        결과 공유하고, 친구와 궁합 확인하기
      </TextBox>
      <ShareBox>
        <img src={'카카오톡.png'} alt="kakaotalk" />
        <img src={'트위터.png'} alt="twitter" />
        <img src={'링크.png'} alt="linkshare" onClick={copyUrl} />
        <form> 
          <TextArea ref={copyUrlRef} defaultValue={window.location.href} /> 
        </form>
      </ShareBox>
    </ResultBox>
  )
}

export default Share
