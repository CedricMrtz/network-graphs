'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import ForceGraph from '../../components/graphs'
import MasterControl from './MasterControl'
import AddUser from './AddUser'

type Node = { id: string; group: number }
type Link = { source: string; target: string; value: number }

export default function Graph() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragStart = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    isDragging.current = true
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
  }
  function onMouseUp() { isDragging.current = false }
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging.current) return
    setOffset({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y })
  }
  function Center() { setOffset({ x: 0, y: 0 }) }

  const [graphData, setGraphData] = useState<{ nodes: Node[]; links: Link[] }>({ nodes: [], links: [] })

  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="text-black w-screen h-screen relative">
      <div className="flex justify-between p-4">
        <Link href="/graph/masterControl"><img src="/menu.svg" alt="Menu" className="size-12 cursor-pointer hover:scale-110"/></Link>
        <button onClick={Center} className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:scale-110">Center</button>
        <img src="/add.svg" alt="Add" onClick={() => setOpen(true)} className="size-12 cursor-pointer hover:scale-110"/>
      </div>
      <AddUser isOpen={isOpen} onClose={() => setOpen(false)} setGraphData={setGraphData} />
      <MasterControl isOpen={isOpen2} onClose={() => setOpen2(false)} />
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <ForceGraph data={graphData} width={dimensions.width} height={dimensions.height} />
      </div>
    </div>
  )
}
