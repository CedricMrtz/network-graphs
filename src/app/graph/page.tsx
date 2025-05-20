'use client';

import React, {useState} from 'react'
import MasterControl from './MasterControl';
import AddUser from './AddUser';

function Graph() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)

  return (
    <>
      <div>
        <div className="flex justify-between gap-4 p-4">
          <img src='/menu.svg' alt="Menu Icon" onClick={() => setOpen2(true)} className='size-12'/>
          <img src='/add.svg' alt='Add' onClick={() => setOpen(true)}  className='size-12'/>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 border-radius-lg bg">
          <h1 className="text-4xl font-bold text-center">
            AAAAAAAAA
          </h1>
        </div>
      </div>

      <AddUser isOpen={isOpen} onClose={() => setOpen(false)} />
      <MasterControl isOpen={isOpen2} onClose={() => setOpen2(false)} />
    </>
  )
}

export default Graph