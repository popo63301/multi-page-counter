import { combineReducers } from 'redux'
import {counter} from './counter'

const mainReducer = combineReducers({
  counter
})

export default mainReducer
