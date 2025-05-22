'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ForceGraph from '../../components/graphs';

type Node = { id: string; group: number };
type Link = { source: string; target: string; value: number };

function Graph() {
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState<{ nodes: Node[]; links: Link[] }>({
    nodes: [],
    links: []
  });

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 928,
    height: typeof window !== "undefined" ? window.innerHeight : 680,
  });

  // Form state
  const [nodeId, setNodeId] = useState('');
  const [nodeGroup, setNodeGroup] = useState(1);
  const [linkValue, setLinkValue] = useState(1);
  const [targetList, setTargetList] = useState<string[]>(['']);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
    <div className='text-black'>
      <div className="flex justify-between gap-4 p-4">
        <Link href={'/graph/masterControl'}>
          <img src='/menu.svg' alt="Menu Icon" className='size-12'/>
        </Link>
      </div>

      <div className="p-4 flex gap-8">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!nodeId) return;

            setGraphData(prev => {
              // build a set of existing node ids
              const existing = new Set(prev.nodes.map(n => n.id));

              // 1) add the main node if needed
              const nodes: Node[] = existing.has(nodeId)
                ? [...prev.nodes]
                : [...prev.nodes, { id: nodeId, group: nodeGroup }];
              existing.add(nodeId);

              // 2) ensure each target exists as a node
              targetList.forEach(t => {
                if (t && !existing.has(t)) {
                  nodes.push({ id: t, group: nodeGroup });
                  existing.add(t);
                }
              });

              // 3) add any new links
              const links = [...prev.links];
              targetList.forEach(t => {
                if (
                  t &&
                  !prev.links.some(
                    l =>
                      l.source === nodeId &&
                      l.target === t &&
                      l.value === linkValue
                  )
                ) {
                  links.push({ source: nodeId, target: t, value: linkValue });
                }
              });

              return { ...prev, nodes, links };
            });

            // reset form
            setNodeId('');
            setNodeGroup(1);
            setTargetList(['']);
            setLinkValue(1);
          }}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <h2 className="font-bold">Add Node and Links</h2>
          <input
            type="text"
            placeholder="Node ID"
            value={nodeId}
            onChange={e => setNodeId(e.target.value)}
            className="border p-1"
          />
          <input
            type="number"
            placeholder="Group"
            value={nodeGroup}
            onChange={e => setNodeGroup(Number(e.target.value))}
            className="border p-1"
          />
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Targets</label>
            {targetList.map((target, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder={`Target ${idx + 1}`}
                  value={target}
                  onChange={e => {
                    const newList = [...targetList];
                    newList[idx] = e.target.value;
                    setTargetList(newList);
                  }}
                  className="border p-1 flex-1"
                />
                <button
                  type="button"
                  onClick={() =>
                    setTargetList(list =>
                      list.length === 1
                        ? list
                        : list.filter((_, i) => i !== idx)
                    )
                  }
                  className="text-red-500 px-2"
                  disabled={targetList.length === 1}
                  title="Remove target"
                >
                  &times;
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setTargetList(list => [...list, ''])}
              className="bg-gray-200 px-2 py-1 rounded w-fit"
            >
              + Add Target
            </button>
          </div>
          <input
            type="number"
            placeholder="Link Value"
            value={linkValue}
            onChange={e => setLinkValue(Number(e.target.value))}
            className="border p-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Add Node & Links
          </button>
        </form>
      </div>

      <div>
        <ForceGraph data={graphData} height={dimensions.height} />
      </div>
    </div>
  )
}

export default Graph
