'use client';

import React from 'react'

type PageProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const AddUser: React.FC<PageProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-20 h-100 rounded-4xl"
        onClick={e => e.stopPropagation()}
      >
        <p className='text-4xl mb-4 -mt-10 justify-center flex'>Add User</p>
        <p className='justify-center flex text-2xl' >Name</p>
        <textarea placeholder='name' className='border border-black'></textarea>
        <p className='justify-center flex text-2xl'>Add friends</p>
        <textarea placeholder='friend' className='border border-black'></textarea>
        <div className='bg-black h-12 rounded-3xl text-white' >
            <div className="flex justify-center items-center h-full w-full mt-6">
            <p>Add</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser