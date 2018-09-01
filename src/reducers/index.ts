/**
 * Redux reducer for the main application.
 */
import { combineReducers } from 'redux'

import entities, { Entities } from './entities'
import containers, { Containers } from './containers'

export interface State {
  containers: Containers
  entities: Entities
}

export default combineReducers<State>({
  containers,
  entities
})