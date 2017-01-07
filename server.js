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

import serverRender from './serverRender'
server.get('/', (req, res) => {
  serverRender()
    .then(content => {
      console.log(content)
      res.render('index', {
        content
      })
    })
    .catch(console.error)
})

server.use('/api', apiRouter)

server.listen(config.port, config.host, () => {
  console.info('express listening on port ', config.port)
})
