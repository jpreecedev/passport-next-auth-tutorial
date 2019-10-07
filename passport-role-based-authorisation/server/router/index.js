import authRoutes from './auth.routes'

function Router(app) {
  app.use(`${process.env.BASE_API_URL}/auth`, authRoutes)
}

export default Router
