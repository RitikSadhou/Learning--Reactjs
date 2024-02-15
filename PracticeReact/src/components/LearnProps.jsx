import React from 'react'

/*export const LearnProps = (Props) => {
  return (
    <>
    <h1>Props{Props.name}</h1>
    <h1>{Props.roll}</h1>
    </>
  )
}
*/

// Destructuring
export const LearnProps = ({name, roll}) => {
    return (
      <>
      <h1>Props{name}</h1>
      <h1>{roll}</h1>
      </>
    )
  }