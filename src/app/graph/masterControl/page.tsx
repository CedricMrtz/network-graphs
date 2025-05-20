import React from 'react'
import UserInfo from './userInfo'

function masterControl() {
  return (
    <div>
      <div className='flex justify-between ' >
        <p className='text-black' >Users_List</p>
        <div>Exit</div>
      </div>
      <UserInfo/>
    </div>
  )
}

export default masterControl