// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_USER = "user/ADD_USER"


// 3. initial state
const initialState = {
  first: "",
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, first: action.payload }
    default:
      return state
  }
}

// 5. action creators
function addUser(text){
    return dispatch=>{
        dispatch({
            type: ADD_USER,
            payload: text
        })
    }
}
// 6. custom hook
export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.userState.first)

  const addSubmission = (text) => dispatch(addUser(text))


  useEffect(() => {
    console.log("mounting component")
  }, [])

  return { user, addSubmission }
}
