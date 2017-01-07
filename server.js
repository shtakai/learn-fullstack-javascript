import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
}))

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  })
})

server.use('/api', apiRouter)

server.listen(config.port, () => {
  console.info('express listening on port ', config.port)
})
