import React from 'react'
import UserInfo from './userInfo'

function masterControl() {
  return (
    <div className=''>
      <div className='flex justify-between w-200' >
        <p className='text-black' >Users_List</p>
        <div className='bg-black text-white' >Exit</div>
      </div>
      <UserInfo/>
    </div>
  )
}

export default masterControl