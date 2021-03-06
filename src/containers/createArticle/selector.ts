/**
 * Selector that fetches data from redux store and maps it as props for Create Article container
 */

import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'
import { Category } from '../../domain/model/Category'

export interface StateProps {
  categories: Category[]
  createArticleError: string
  isCreatingArticle: boolean
  user: User
}

const user = (state: State) => state.entities.user

const isCreatingArticle = (state: State) => state.containers.createArticle.isCreatingArticle

const createArticleError = (state: State) => state.containers.createArticle.createArticleError

const categories = (state: State) => state.entities.categories

export default createStructuredSelector<State, StateProps>({
  createArticleError,
  categories,
  isCreatingArticle,
  user,
})