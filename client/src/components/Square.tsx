import React, { ReactNode } from 'react'

type SquareProp = {
  el: string,
  i: number,
  playerClick: (i: number) => void
}

const Square: React.FC<SquareProp> = ({ el, i, playerClick }) => {
  return (
    <div className="square" key={i} onClick={() => playerClick(i)}>{el}</div>
  )
}

export default Square