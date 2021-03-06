/**
 * Actions for rehydrate all required application data (e.g. users, articles, categories data)
 */

import { Store } from 'redux'

import { ActionTypes } from './ActionTypes'
import ArticleRepository from '../domain/repository/ArticleRepository'
import CategoryRepository from '../domain/repository/CategoryRepository'
import UserRepository from '../domain/repository/UserRepository'
import i18n from '../i18n'

/**
 * Rehydrate articles, users, categories, login, user, and language state as the initial data
 * @param store The store instance of application to put and read all redux state
 */
export const rehydrateState = async (store: Store) => {
  const articles = await ArticleRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_ARTICLES, articles: articles.data.message })

  const users = await UserRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_USERS, users: users.data.message })

  const categories = await CategoryRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_CATEGORIES, categories: categories.data.message })

  const isLoggedIn = await !!localStorage.getItem('token')
  store.dispatch({ type: ActionTypes.GET_LOGIN, isLoggedIn })

  // Check if id is present in local storage then try to get the current user login detail with the id
  const id = localStorage.getItem('id')
  if (id !== null) {
    const user = await UserRepository.get(id)
    store.dispatch({ type: ActionTypes.GET_USER, user: user.data.message })
  }

  // Check if language is present then try to change the language with the local one, otherwise it will fallback to english
  const localLanguage = localStorage.getItem('language')
  const currentLanguage = localLanguage !== null ? localLanguage : 'en'
  i18n.changeLanguage(currentLanguage)
}
