import React from 'react'
 const p2={
     color:'blue'
 }
const Function = () => {
  return (
    <div>
        <div className='function'>
        <h2>This is created using functional Component</h2>
        <p>This is done using external CSS</p>
        <p style={p2}>This is done using internal CSS</p>
        </div>
         </div>
  )
}

export default Function