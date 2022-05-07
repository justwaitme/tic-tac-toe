import React from 'react'
import Square from './Square'
import '../index.css'


function Board({squares, onClick}) 
{
  return (
    <div className='board'>
        {squares.map((square,i)=>(
            <Square key={i} value={square} onClick={()=> onClick(i)} />
        ))}
    </div>
  )
}

export default Board