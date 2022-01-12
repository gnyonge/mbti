import React from 'react'

const MainButton = ({ content1, content2 }) => {
  return (
    <div className='main-button'>
      <div className='content1'>
        {content1} 
      </div>
      <div className='content2'>
        {content2}
      </div>
    </div>
  )
}

export default MainButton
