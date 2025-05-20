import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/graph'} className='text-red-50 bg-amber-700' >AA</Link>
    </div>
  );
}
