import React from 'react'

export const LearnMap = () => {
    const item=['Item1', 'Item2', 'Item3', 'Item4']
  return (
  <>
   <ul>
    {
        item.map((item , i)=>(
            <li key={i}>{item}</li>
        ))
    }
   </ul>
  </>
  )
}
