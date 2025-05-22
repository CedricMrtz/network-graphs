import React from 'react'
import ColorEllipses from './colorEllipses'

function UserInfo() {
  return (
    <div className='rounded-2 justify-center'>
      <div className='bg-black w-130 rounded-2xl h-14 right-100 -ml-10 mb-3.5' >
        <div className='justify-between flex items-center h-full'>
          <p className='text-2xl text-white ml-2'>User_Name</p>
          <ColorEllipses/>
          <img src={'/Trash.svg'} alt='Trashcan' className='w-8 text-white mr-2'/>
        </div>
      </div>
    </div>
  )
}

export default UserInfo