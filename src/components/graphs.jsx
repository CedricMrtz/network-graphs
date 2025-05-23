'use client'
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export default function ForceGraph({ data, width, height }) {
  const ref = useRef();
    const nodeColors = useRef({});

  useEffect(() => {
    d3.select(ref.current).selectAll("*").remove();

    const palette = [
      "#706666", "#998D8D", "#302828", "#845151", "#4C4B70",
      "#7D9277", "#92AC8A", "#774A6D", "#54818B", "#44406C",
      "#5C5A5A", "#A08C86", "#3C2F2F", "#915D5D", "#5A547A",
      "#6C8F6A", "#9DB39B", "#8B5A79", "#507C84", "#555079"
    ];

    const links = data.links.map(d => ({ ...d }));
    const linkCounts = {};
    data.links.forEach(({ source, target }) => {
      linkCounts[source] = (linkCounts[source] || 0) + 1;
      linkCounts[target] = (linkCounts[target] || 0) + 1;
    });


    const nodes = data.nodes.map(d => ({
      ...d,
      color: (() => {
        if (!nodeColors.current[d.id]) {
          nodeColors.current[d.id] = palette[Math.floor(Math.random() * palette.length)];
        }
        return nodeColors.current[d.id];
      })(),
      degree: linkCounts[d.id] || 0
    }));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-300))
        .force("collide", d3.forceCollide().radius(d => 25 + d.degree * 7))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const svg = d3.select(ref.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    const label = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.id);

    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.9)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value || .1));

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => 20 + d.degree * 5) // base radius 20, +5 per link
      .attr("fill", d => d.color);

    node.append("title")
      .text(d => d.id);

    node.call(
      d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      label
        .attr("x", d => d.x)
        .attr("y", d => d.y + (20 + d.degree * 5) + 10) // 10px below the node

    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => simulation.stop();
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
}