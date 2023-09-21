import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
// 2- the workout after 1
const [workouts,setWorkouts] = useState(null)

// 1- fire this function when the component first renders
// we then have the 'workouts' at 2  
useEffect (()=>{
    const fetchWorkouts = async ()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json()
      if(response.ok){
        setWorkouts(json)
      }

    }
    fetchWorkouts()

  },[])

    return (
      <div className="home">
     
      <div className="workouts"></div>
        {workouts&&workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        )
          
          )}
      </div>
    )
  }
  
  export default Home;