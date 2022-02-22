import React, { Component } from 'react'

const p2={
    color:'blue'
}


export class Class extends Component {
    
  render() {
    return (
      <div>
          <div className='class'>
        <h2>This is created using functional Component</h2>
        <p>This is done using external CSS</p>
        <p style={p2}>This is done using internal CSS</p>
        </div>
      </div>
    )
  }
}

export default Class