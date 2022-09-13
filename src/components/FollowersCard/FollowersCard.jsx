import React from 'react'
import './.'
import { Followers } from '../Data/FollowersData'


function FollowersCard() {
  return (
    <div className='FollowerCard'>
        <h3>Who is Following you</h3>

        {
          Followers.map((follower, id)=>{
            return(
              <div className="follower">
                <img src={follower.img} className="followerImg"/>
                <div className="name">
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
                  <button>Follow</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default FollowersCard