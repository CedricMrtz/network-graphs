import React from 'react'
import Link from 'next/link';

function graph() {
  return (
    <div>
      <div className="flex justify-between gap-4 p-4">
        <Link href={'/graph/masterControl'} ><img src='/menu.svg' alt="Menu Icon" className='size-12'/></Link>
        <img src='/add.svg' alt='Add' className='size-12'/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 border-radius-lg bg">
        <h1 className="text-4xl font-bold text-center">
          AAAAAAAAA
        </h1>
      </div>
    </div>
  )
}

export default graph