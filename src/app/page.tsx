import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="m-0 p-0 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="bg-white/95 p-12 rounded-2xl text-center shadow-lg">
        <h1 className="text-black font-medium mb-3 text-3xl">
          Social media<br />relations simulator
        </h1>
        <Link href="/graph">
          <button className="bg-black text-white text-lg px-7 py-2 rounded-full cursor-pointer hover:scale-110 transition">
            START
          </button>
        </Link>
      </div>
    </div>
  );
}
