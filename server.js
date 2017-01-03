import config from './config'

import express from 'express'
const server = express()

server.get('/', (req, res) => {
  res.send('Hello express')
})

server.get('/about.html', (req, res) => {
  res.send('the about page')
})

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
