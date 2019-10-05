require('dotenv').config()

import express from 'express'
import next from 'next'
import { urlencoded, json } from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import { connectToDatabase } from './database/connection'

import router from './router'
import { initialiseAuthentication } from './auth'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const port = 3000

nextApp.prepare().then(() => {
  const app = express()

  app.get('/my-custom-route', (req, res) =>
    res.status(200).json({ hello: 'Hello, from the back-end world!' })
  )

  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(cookieParser())

  app.use(passport.initialize())

  router(app)
  initialiseAuthentication(app)

  app.get('*', (req, res) => {
    return handle(req, res)
  })
  ;(async () => {
    await connectToDatabase()
  })()

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on localhost:${port}`)
  })
})
