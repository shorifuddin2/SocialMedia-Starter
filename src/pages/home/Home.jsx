import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import "./Home.css"

function Home() {
  return (
    <div className='Home'>
       <ProfileSide/>
        <div className='postSide'>Post</div>
        <div className='RightSide'>Right Side</div>
    </div>
  )
}

export default Home