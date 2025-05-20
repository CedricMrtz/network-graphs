import React from 'react'
import ColorEllipses from './colorEllipses'

function UserInfo() {
  return (
    <div className='flex rounded-2 justify-center'>
      <div className='bg-black w-200 rounded-2xl h-14' >
        <div className='justify-between flex items-center h-full'>
          <p className='text-2xl'>User_Name</p>
          <ColorEllipses/>
          <img src={'/trashcan.svg'} alt='Trashcan' className='w-10 bg-amber-50' />
        </div>
      </div>
    </div>
  )
}

export default UserInfo