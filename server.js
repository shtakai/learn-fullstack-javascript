import config from './config'

import express from 'express'
const server = express()

server.use(express.static('public'))

server.get('/', (req, res) => {
  res.send('Hello express')
})

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
