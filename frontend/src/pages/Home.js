import {useEffect} from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/Workoutform'


const Home = () => {
// 2- the workout after 1

const { workouts, dispatch } = useWorkoutsContext()

// 1- fire this function when the component first renders
// we then have the 'workouts' at 2  
useEffect (()=>{
    const fetchWorkouts = async ()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json()
      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }

    }
    fetchWorkouts()

  },[])

    return (
      <div className="home">
     
      <div className="workouts">
      {workouts&&workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        )
          
          )}

      </div>
        <WorkoutForm/>
      </div>
    )
  }
  
  export default Home;