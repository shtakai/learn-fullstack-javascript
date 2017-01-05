import React from 'react'
import ReactDOM from 'react-dom'

import data from './testData'
console.log(data)

import App from './components/App'

ReactDOM.render(
  <App contents={data.contents} />,
  document.getElementById('root')
)



