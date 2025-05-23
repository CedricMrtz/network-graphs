'use client';

import React from 'react'
import UserInfo from '../../components/userInfo'

type Node = { id: string; group: number }
type Link = { source: string; target: string; value: number }

type PageProps = {
  isOpen: boolean;
  onClose: () => void;
  graphData: { nodes: Node[]; links: Link[] }
  setGraphData?: React.Dispatch<
    React.SetStateAction<{ nodes: Node[]; links: Link[] }>
  >
  children?: React.ReactNode;
};


const MasterControl: React.FC<PageProps> = ({isOpen, onClose, graphData, setGraphData, children}) => {
if(!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-20 h-full w-150 relative"
        onClick={e => e.stopPropagation()}
      >
        <img src="/cross.svg" alt="cross" 
        className="absolute top-4 left-4 size-16 cursor-pointer"
        onClick={onClose}
        />
        {graphData.nodes.map(node => (
          <UserInfo 
            key={node.id}
            node={node}
            graphData={graphData}
            setGraphData={setGraphData}
          />
        ))}
      </div>
    </div>
  )
}

export default MasterControl