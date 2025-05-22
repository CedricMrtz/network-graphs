import React from 'react'

function ColorEllipses() {
  return (
    <svg
      width={152}
      height={32}
      viewBox="0 0 152 32"
    >
      <ellipse cx={16.5} cy={16} rx={16.5} ry={16} fill="#D9D9D9" />
      <ellipse cx={16.5} cy={16} rx={16.5} ry={16} fill="white" />
      <ellipse cx={32.5} cy={16} rx={16.5} ry={16} fill="#C3BDBD" />
      <ellipse cx={52.5} cy={16} rx={16.5} ry={16} fill="#998D8D" />
      <ellipse cx={69.5} cy={16} rx={16.5} ry={16} fill="#706666" />
      <ellipse cx={82.5} cy={16} rx={16.5} ry={16} fill="white" />
      <ellipse cx={98.5} cy={16} rx={16.5} ry={16} fill="#C3BDBD" />
      <ellipse cx={118.5} cy={16} rx={16.5} ry={16} fill="#998D8D" />
      <ellipse cx={135.5} cy={16} rx={16.5} ry={16} fill="#706666" />
    </svg>
  )
}

export default ColorEllipses;