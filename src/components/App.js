import React from 'react'
import Header from './Header'

const App = () => {
  return(
    <div className="App">
      <Header message="Naming Contests" />
      <div>
        {Math.random()}
      </div>
    </div>
  )
}

export default App
