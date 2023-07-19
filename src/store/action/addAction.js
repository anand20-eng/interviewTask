

import { addData } from "../../services/api";
import { ADD_USER_ERROR, ADD_USER_SUCCESS } from "../constant"

// const key = 'personData'

// export const addUserAction = (value) => {
//   const thenMethod = (resolve, reject, dispatch) => {
//     const localData = localStorage.getItem(key)
//     const persons = localData ? JSON.parse(localData) : []
//     value.id = persons.length + 1
//     persons.push(value);
//     localStorage.setItem(key, JSON.stringify(persons))
//     resolve({ message: 'data saved', data: persons })
//   }
//   return new Promise(thenMethod)
// }

export const addUser = (user) =>
  async (dispatch, state) => {
    try {
      const response = await addData(user)
      console.log('response =>', response)
      dispatch(addUserSuccess(response.message))

    } catch (error) {
      dispatch(addUserError(error.message))
    }
  }

export const addUserSuccess = (message) => ({ type: ADD_USER_SUCCESS, payload:message});
export const addUserError = (message) => ({ type: ADD_USER_ERROR, payload: message });
