import thunk from 'redux-thunk'
import logger from './logger'
import { applymiddleware } from 'redux'

export default applymiddleware(
    thunk,
    logger
)