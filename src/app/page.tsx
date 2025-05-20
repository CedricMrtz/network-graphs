'use client'
import React, { useEffect, useState } from 'react';
import ForceGraph from '../components/graphs';

const data = {
  nodes: [
    { id: "A", group: 1 },
    { id: "B", group: 1 },
    { id: "C", group: 2 },
    { id: "D", group: 2 }
  ],
  links: [
    { source: "A", target: "B", value: 1 },
    { source: "A", target: "C", value: 2 },
    { source: "B", target: "D", value: 1 }
  ]
};

export default function App() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 928,
    height: typeof window !== "undefined" ? window.innerHeight : 680,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }} className='flex'>
      <div className="">
        <ForceGraph data={data} height={dimensions.height} />
      </div>



    </div>
  );
}