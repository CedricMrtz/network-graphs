import React from 'react'

function UserInfo() {
  return (
    <div className='flex rounded-2 justify-center'>
      <div className='bg-black w-250 rounded-2xl h-14' >
        <div className='justify-between flex items-center h-full'>
            <p className='text-2xl'>User_Name</p>
          <p></p>
          <img src={'.././traschan.svg'} alt='Trashcan'/>
        </div>
      </div>
    </div>
  )
}

export default UserInfo