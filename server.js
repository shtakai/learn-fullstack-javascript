import config from './config'
import apiRouter from './api'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {
    content: 'hello express and <em>ejs</em>'
  })
})

server.use('/api', apiRouter)

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
