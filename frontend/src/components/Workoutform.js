
import {useState} from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


const Workoutform = ()=>{
    // avoid homepage refresh to display new workout
    const { dispatch } = useWorkoutsContext()
    // state is updated when user enters input
const [title,setTitle]=useState('')
const [load,setLoad]=useState('')
const [reps,setReps]=useState('')
const [error, setError] = useState(null)

const handleSubmit = async (e) =>{
    e.preventDefault()
    const workout = {title, load, reps}

    const response = await fetch('/api/workouts',{
        method:'POST',
        body:JSON.stringify(workout),
        headers: {
            'Content-Type':'application/json'
        }
    })
const json = await response.json()

if(!response.ok){
setError(json.error)
}
if(response.ok){
    setTitle('')
    setLoad('')
    setReps('')
    setError(null)
    console.log('new workout added',json)
    // avoid homepage refresh to display new workout
    // adds workout to global context state
    dispatch({type: 'CREATE_WORKOUT', payload: json})
}

}

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>

            <label>Exercise Title: </label>
            <input type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={(title)} />

            <label>Load (kg): </label>
            <input type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value={(load)} />

            <label>Reps: </label>
            <input type="number"
            onChange={(e)=>setReps(e.target.value)}
            value={(reps)} />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}
export default Workoutform