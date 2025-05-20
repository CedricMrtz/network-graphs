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
      className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
      onClick={onClose}
      >
      <div className='flex justify-between w-200 ' >
        <p className='text-black text-4xl' >Users_List</p>
        <div className='bg-black text-white rounded-3xl w-20 h-5'>Exit</div>
      </div>
      <div className='flex justify-between w-200'>
        <p className='text-black'>Name</p>
        <p className='text-black'>Friends</p>
      </div>
      <UserInfo/>
    </div>
  )
}

export default MasterControl