import config from './config'
import fs from 'fs'

import express from 'express'
const server = express()

server.get('/', (req, res) => {
  res.send('Hello express')
})

server.get('/about.html', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString())
  })
})

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
