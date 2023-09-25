// 'Context' is required to manage our workout states
import {createContext, useReducer} from 'react'

// create brand new context by invoking createContext()
// (export to use it in other files)
export const WorkoutsContext =  createContext()
// create reducer function
// check the state of the object then check the action type required
export const workoutsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_WORKOUTS':
        return { 
          workouts: action.payload 
        }
      case 'CREATE_WORKOUT':
        return { 
          workouts: [action.payload, ...state.workouts] 
        }
      default:
        return state
    }
  }


// provide the 'context' to the application component
// tree so that components can access it
// make a context provider component in the form of a
// regular react component that will wrap the application
// children property represents the application (<App /> from index.js)
export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer,
        {workouts: null
        })
    
// return template
return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {/* wraps root component /App */}
      { children }
    </WorkoutsContext.Provider>
)


}