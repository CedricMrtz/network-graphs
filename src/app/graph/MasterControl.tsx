'use client';

import React from 'react'
import UserInfo from '../../components/userInfo'

type PageProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};


const MasterControl: React.FC<PageProps> = ({isOpen, onClose, children}) => {
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
        <UserInfo />
        <UserInfo />
      </div>
    </div>
  )
}

export default MasterControl