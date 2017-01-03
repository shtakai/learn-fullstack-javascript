import config from './config'
import apiRouter from './api'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  console.log('test')
  res.render('index')
})

server.use('/api', apiRouter)

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
