import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutDetails=({workout})=>{
// get the dispatch function
    const { dispatch } = useWorkoutsContext()
// handle function for delete button click
// FIRST argument communicates with the API
// SECOND argument is a DELETE request
    const handleClick = async () => {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })
      // JSON is deleted Document
      const json = await response.json()
  
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: json})
      }
    }


    return(
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load(kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.created}</p>
        <span onClick={handleClick}>delete</span>

    </div>
    )
}
export default WorkoutDetails