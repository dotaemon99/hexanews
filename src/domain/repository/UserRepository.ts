/**
 * Repository domain for the user.
 */

import axios from 'axios'

import { User } from '../model/User'
import * as Config from '../../constants/config'

export default {

  create: async (email: string, password: string, name: string): Promise<any> => {

    const response = await axios.post(Config.USER_ENDPOINT, {
      email: email,
      password: password,
      name: name,
    })

    return response
  },

  get: async (id: string) => {

    const response = await axios.get(`${Config.USER_ENDPOINT}/${id}`)

    return response
  },

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.USER_ENDPOINT)

    return response
  },

  edit: async (edittedUser: User) => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.put(`${Config.USER_ENDPOINT}/${edittedUser._id}`, {
      email: edittedUser.email,
      name: edittedUser.name,
      description: edittedUser.description,
    }, header)

    return response
  },

}