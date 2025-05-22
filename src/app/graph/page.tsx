'use client';

import React, {useState, useRef} from 'react'
import MasterControl from './MasterControl';
import AddUser from './AddUser';

function Graph() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef({x:0, y:0})
  const isDragging = useRef (false)

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>){
    isDragging.current = true
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    }
  }

  function onMouseUp(){
    isDragging.current = false
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging.current) return
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    })
  }

  function Center(){
    setOffset({x:0,y:0})
  }

  return (
    <>
      <div className='w-screen h-screen relative'>
          {/* Header */}
          <div className="flex justify-between gap-4 p-4"> 
            <img src='/menu.svg' alt="Menu Icon" onClick={() => setOpen2(true)} className='size-12'/>
            <button
            className='bg-amber-500'
            onClick={(Center)}
            >
            Center
            </button>
            <img src='/add.svg' alt='Add' onClick={() => setOpen(true)}  className='size-12'/>
          </div>
        {/* Here will be the graph using infinite scroll*/}
        <div
          className="w-screen h-screen overflow-hidden relative cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div 
          className='absolute top-0 left-0' 
          style={{transform: `translate(${offset.x}px, ${offset.y}px)`}}
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-2 border-radius-lg bg">
              <h1 className="text-4xl font-bold text-center text-black">
                AAAAAAAAA
              </h1>
            </div>
          </div>
        </div>

        {/* Here are the overlays */}
        <AddUser isOpen={isOpen} onClose={() => setOpen(false)} />
        <MasterControl isOpen={isOpen2} onClose={() => setOpen2(false)} />
      </div>
    </>
  )
}

export default Graph