require('dotenv').config()

import express from 'express'
import next from 'next'
import { urlencoded, json } from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'

import router from './router'
import { connectToDatabase } from './database/connection'
import { initialiseAuthentication, utils } from './auth'
import { ROLES } from '../utils'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const port = 3000

nextApp.prepare().then(async () => {
  const app = express()

  const handleAuthenticatedRoute = (method, route, ...roles) =>
    app[method](
      route,
      passport.authenticate('jwt', { failureRedirect: '/login' }),
      utils.checkIsInRole(...roles),
      (req, res) => {
        return handle(req, res)
      }
    )

  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(cookieParser())

  app.use(passport.initialize())

  router(app)
  initialiseAuthentication(app)

  handleAuthenticatedRoute('get', '/admin-dashboard', ROLES.Admin)
  handleAuthenticatedRoute('get', '/customer-dashboard', ROLES.Customer)
  handleAuthenticatedRoute('get', '/both-dashboard', ROLES.Admin, ROLES.Customer)

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  await connectToDatabase()

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on localhost:${port}`)
  })
})
