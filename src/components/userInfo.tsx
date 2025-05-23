import React from 'react'
import ColorEllipses from './colorEllipses'

type Node = { id: string; group: number }
type Link = { source: string; target: string; value: number }

interface UserInfoProps{
  node: Node
  graphData?: { nodes: Node[]; links: Link[] }
  setGraphData?: React.Dispatch<
    React.SetStateAction<{ nodes: Node[]; links: Link[] }>
  >
}

const UserInfo: React.FC<UserInfoProps> = ({node, graphData, setGraphData}) =>{
  return (
    <div className='rounded-2 justify-center'>
      <div className='bg-black w-130 rounded-2xl h-14 right-100 -ml-10 mb-3.5' >
        <div className='justify-between flex items-center h-full'>
          <p className='text-2xl text-white ml-2'>{node.id}</p>
          {/* <ColorEllipses/> */}
          <img src={'/Trash.svg'} alt='Trashcan' 
            className='w-8 text-white mr-2'
            onClick={() => {
              if (!graphData || !setGraphData) return
              setGraphData({
                nodes: graphData.nodes.filter((n) => n.id !== node.id),
                links: graphData.links.filter(
                  (l) => l.source !== node.id && l.target !== node.id
                ),
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default UserInfo