import * as utils from './utils'
import * as strategies from './strategies'

const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args)

const initialiseAuthentication = app => {
  utils.setup()

  pipe(
    strategies.FacebookStrategy,
    strategies.JWTStrategy
  )(app)
}

export { utils, initialiseAuthentication, strategies }
